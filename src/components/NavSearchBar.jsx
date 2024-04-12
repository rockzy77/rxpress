import { FaSearch } from "react-icons/fa";
import { lightTheme } from "./Colors";

const NavSearchBar = () => {
    return <div id="navSearchBar">
        <input placeholder="Search for medicine or category" type="text" name="" id="navSearchInput" />
        <FaSearch style={{
            color: lightTheme.secondaryColor
        }} className="navSearchIcon"/>
    </div>
}

export default NavSearchBar;