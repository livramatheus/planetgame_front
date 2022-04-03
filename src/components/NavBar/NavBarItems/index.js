import { Link } from "react-router-dom";
import Logout from "../../Logout";
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";

function NavBarItems(props) {
    
    let { aos, handleMenuHamburger } = props;

    const animationEffect = 'fade-right';

    useEffect(() => {
        Aos.init({
            duration: 500
        })
    });

    return (
        <div className="navbar-links" data-aos={aos && animationEffect} >
            <Link
                to="/"
                onClick={handleMenuHamburger}
            >
                Home
            </Link>

            <Link
                to="/game"
                onClick={handleMenuHamburger}
            >
                Game
            </Link>
            
            <Link
                to="/publisher"
                onClick={handleMenuHamburger}
            >
                Publisher
            </Link>

            <Link
                to="/genre"
                onClick={handleMenuHamburger}
            >
                Genre
            </Link>
            
            <Logout />
        </div>
    );
}

export default NavBarItems;