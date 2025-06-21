const Underline = ({children, css}) => {
    return (
        <span className={`underline ${css}`}>{children}</span>
    )
}

export default Underline