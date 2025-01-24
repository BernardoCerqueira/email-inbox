import { useState } from "react"
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";


export default function SwitchTheme(){
    const [isDark, setIsDark] = useState(true)

    function switchTheme(){
        document.body.classList.toggle("dark")
        setIsDark(cs => !cs)
    }

    return(
        <button onClick={switchTheme}>
            {isDark ? <FaSun color="white" size={24}/> : <IoMoon size={24}/>}
        </button>
    )
}