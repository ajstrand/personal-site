const isServer = typeof window === "undefined";
const Island = ({
  children,
  componentName,
  islandTag: IslandComponent = "div",
  ...islandProps
}) => {
  let hydrationProps;
  if (isServer) {
    const { props } = children;
    hydrationProps = JSON.stringify(props);
  }
  return (
    <div
      data-hydration-component={componentName}
      data-hydration-props={hydrationProps}
      {...islandProps}
    >
      {children}
    </div>
  );
};

export default Island;
