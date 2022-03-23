import { Link } from "react-router-dom";
import Logout from "../../components/Logout";

function NavBar() {
    return (
        <nav id="navbar">
            <Link className="logo" to="/" title="Planet Game"></Link>
            <Link to="/">Home</Link>
            <Link to="/game">Game</Link>
            <Link to="/publisher">Publisher</Link>
            <Link to="/genre">Genre</Link>
            <Logout />
        </nav>
    );
}

export default NavBar;