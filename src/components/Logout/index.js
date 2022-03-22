import { useContext } from "react";
import { AuthenticatorContext } from "../Authenthicator";

function Logout() {

    const {
        ctxUserName,
        ctxFirstName,
        ctxLastName, 
        ctxIsLoggedIn
    } = useContext(AuthenticatorContext);

    const executeLogout = () => {
        ctxUserName.setUserName('');
        ctxFirstName.setFirstName('');
        ctxLastName.setLastName('');
        ctxIsLoggedIn.setIsLoggedIn(false);

        localStorage.removeItem('jwt-key');
    }

    return (
        ctxIsLoggedIn.isLoggedIn ? (
            <span onClick={() => executeLogout()}>Logout</span>
        ) : (
            null
        )
    );
}

export default Logout;