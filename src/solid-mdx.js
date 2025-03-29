import { HTMLElements, SVGElements } from "./elements";

import {
  createContext,
  Component,
  mergeProps,
  useContext,
  createComponent,
  PropsWithChildren,
  JSX,
} from "solid-js";
import { Dynamic } from "solid-js/web";

export const MDXContext = createContext(
  Object.fromEntries(
    [...HTMLElements, ...SVGElements.keys()].map((el) => [
      el,
      (props) => {
        props = mergeProps(props, {
          component: el,
        });
        return createComponent(Dynamic, props);
      },
    ])
  )
);

export const MDXProvider = (
  props
) => {
  const context = useContext(MDXContext);
  const result = createComponent(MDXContext.Provider, {
    get value() {
      return {
        ...context,
        ...(props.components ?? {}),
      };
    },
    get children() {
      return props.children;
    },
  });
  console.log(result)
  return result
};

export const useMDXComponents = () => {
  return useContext(MDXContext);
};