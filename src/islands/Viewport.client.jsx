import { useState } from "preact/hooks";

const Viewport = ({ viewportSize }) => {

    const [size, setSize] = useState("")

    //"w-16 md:32 lg:48 xl:64"

    const onChange = (event) => {
        const num = event.target.value;
        setSize(`w-[${num}px]`)

    }

    return (
        <>
            <div>
                <p>this will control the viewport</p>
                <div>
                    <input value={size} onChange={(event) => onChange(event)} type="text" />
                </div>
            </div>
            <div className={size}>
          <p>this is a test, really really long text</p>
            </div>
        </>
    )


}

export default Viewport;