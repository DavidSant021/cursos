import { useRef } from "react"

export default function RefExample() {

    const inputRef = useRef(null)

    const handleClick = () => {
        console.log(inputRef.current)
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "#f64348"
    }

    return (
        // posso usar para associar a um elemento do DOM
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focar no Input</button>
        </div>
    )
}