import { Link } from "react-router-dom";
import Logout from "../../Logout";
import NavBarItems from "../NavBarItems";

function DesktopNavBar() {
    
    return (
        <nav id="navbar">
            <Link className="logo" to="/" title="Planet Game"></Link>
            <NavBarItems />
        </nav>
    );
}

export default DesktopNavBar;