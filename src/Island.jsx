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
        data-tropical-hydration-component={componentName}
        data-tropical-hydration-props={hydrationProps}
        {...islandProps}
      >
        {children}
      </IslandComponent>
    )
  }

  export default Island