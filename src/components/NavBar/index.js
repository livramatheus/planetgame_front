import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav id="navbar">
            <Link className="logo" to="/" title="Planet Game"></Link>
            <Link to="/">Home</Link>
            <Link to="/game">Game</Link>
            <Link to="/publisher">Publisher</Link>
            <Link to="/genre">Genre</Link>
        </nav>
    );
}

export default NavBar;