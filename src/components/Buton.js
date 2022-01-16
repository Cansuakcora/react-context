import {useContext} from 'react';
import ThemeContext from "../context/ThemeContext";

function Buton() {
    const {theme , setTheme} = useContext(ThemeContext);

    return (
        <div>
            Active theme : {theme}

            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>change Theme</button>
        </div>
    )
}

export default Buton;
