import { render } from "preact-render-to-string";
import Island from "./Island.jsx";
//const App = () => <h1>Hello World from preact!</h1>;
export const renderComponent = (pathname, props) => {

  const modules = import.meta.glob('./main.js', { eager: true })
  if(modules.length == 0){
    return new Error("no modules")
  }
  const comps = Object.entries(modules).reduce((comps, [modulePath, page]) => {
    const filePath = modulePath.replace(/^\.\/comps/, '').replace(/(\.jsx|\.mdx)$/, '')
    //const urlPath = filePath.endsWith('/index') ? filePath.replace(/index$/, '') : `${filePath}/`
    const urlPath = '/'

    comps[urlPath] = {
      Component: page.default,
      meta: page.meta,
      tableOfContents: page.tableOfContents,
      filePath,
      modulePath,
      urlPath
    }
    return comps
  }, {})

  let html;
  pathname = '/'
    if(!comps[pathname]) {
      html =  render(
       <div>there is nothing here</div>
      );
    }
    else {
      const {Component} = comps[pathname]
      html =  render(
         <Island componentName="Counter" islandTag="span">
            <Component {...props}  />
         </Island>
       );
    }

     return {html}


};