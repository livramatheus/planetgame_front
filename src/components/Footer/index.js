import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer id="footer">
            <div id="footerdivcontainer">
                <div className="pages">
                    <h3>Pages</h3>
                    <Link to="/">Home</Link>
                    <Link to="/game">Game</Link>
                    <Link to="/publisher">Publisher</Link>
                    <Link to="/genre">Genre</Link>
                </div>
                <div className="pages">
                    <h3>Other Stuff</h3>
                    <Link to="/about">About</Link>
                    <Link to="/privacypolicy">Privacy Policy</Link>
                    <Link to="/author">Author</Link>
                </div>
                <div className="pages">
                    <div className="logo" to="/" title="Planet Game"></div>
                    <a href="https://www.livramento.dev/">Author's website</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;