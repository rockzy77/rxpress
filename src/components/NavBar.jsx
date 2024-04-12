import { lightTheme } from "./Colors"
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import NavSearchBar from "./NavSearchBar";

export const NavBar = () => {
    return (

        <nav id="navbar" style={{
            backgroundColor: lightTheme.secondaryColor,
            color: lightTheme.textColor
        }} className="navbar">

            <h1>RXPress</h1>

            <div className="nav-opt">
                <NavSearchBar />
                <BsCart2 className="nav-opt-icon"/>
                <MdOutlineAccountCircle className="nav-opt-icon"/>
            </div>
        </nav>
    );
}