import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";
import useResponsive from "../../hooks/useResponsive";

function NavBar() {

    const isResponsive = useResponsive();

    if (isResponsive) {
        return <MobileNavBar />
    }
    
    return <DesktopNavBar />
}

export default NavBar;