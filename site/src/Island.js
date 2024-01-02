const isServer = typeof window === `undefined`;
const  Island = ({
    children,
    componentName,
    islandTag: IslandComponent = 'div',
    ...islandProps
  }) => {
    let hydrationProps;
    if(isServer){
      const {props} = children;
      hydrationProps = JSON.stringify(props)
    }
    return (
      <IslandComponent
        data-hydration-component={componentName}
        data-hydration-props={hydrationProps}
        {...islandProps}
      >
        {children}
      </IslandComponent>
    )
  }

  export default Island