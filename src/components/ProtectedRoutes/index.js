import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthenticatorContext } from "../Authenthicator";
import LoginAdminForm from "../LoginAdminForm";

function ProtectedRoutes() {

    const { ctxIsLoggedIn } = useContext(AuthenticatorContext);

    return ctxIsLoggedIn.isLoggedIn ? <Outlet /> : <LoginAdminForm />
}

export default ProtectedRoutes;