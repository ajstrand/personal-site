const ButtonJSX = ({ isMounted, textIsShowing, setAnimation, buttonText, text }) => {
    return (
        <>
            <button
                className="exampleButton"
                type="button"
                disabled={!isMounted}
                onClick={() => {
                    if (textIsShowing) {
                        setAnimation(false);
                        return;
                    }
                    setAnimation(true);
                }}
            >
                {buttonText}
            </button>
            {textIsShowing ? <p>{text}</p> : null}
        </>

    )
}