const Underline = ({children, color}) => {
    return (
        <span className={`underline ${color}`}>{children}</span>
    )
}

export default Underline