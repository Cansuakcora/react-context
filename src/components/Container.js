import Buton from "./Buton";
import Header from "./Header";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext"

function Container() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`app ${theme}`}>
              <Header/>
              <Buton/>
        </div>
    )
}

export default Container
