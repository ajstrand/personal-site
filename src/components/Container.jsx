const Container = ({classCSS, children}) => {
    return (
        <div className={`content ${classCSS}`}>{children}</div>

    )
}

export default Container;