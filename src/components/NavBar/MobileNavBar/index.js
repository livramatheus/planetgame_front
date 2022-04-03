import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import NavBarItems from "../NavBarItems";
import Backdrop from "../../Backdrop";
import disableScroll from 'disable-scroll';

function MobileNavBar() {

    const [toggled     , setToggled]      = useState(false);
    const [scrollLocked, setScrollLocked] = useState(false);

    const handleMenuHamburger = () => {
        document.documentElement.scrollTop = 0;
        setToggled(!toggled);
        setScrollLocked(!scrollLocked);
    }

    useEffect(() => {
        scrollLocked ? disableScroll.on() : disableScroll.off();
        return () => disableScroll.off();
    }, [scrollLocked]);

    return (
        <>
            <nav id="navbar">
                <Link className="logo" to="/" title="Planet Game"></Link>
                <Hamburger toggled={toggled} toggle={() => handleMenuHamburger()} />
                {toggled && <NavBarItems aos={true} handleMenuHamburger={handleMenuHamburger} />}
            </nav>
            {toggled && <Backdrop handleMenuHamburger={handleMenuHamburger} />}
        </>
    );
}

export default MobileNavBar;