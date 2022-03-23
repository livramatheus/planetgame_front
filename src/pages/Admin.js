import { AuthenticatorContext } from "../components/Authenthicator";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

function Admin() {

    const { ctxFirstName } = useContext(AuthenticatorContext);
    const title = "Admin";

    return (
        <main id="main">
            <div className="content">
                <PageTitle title={title} />
                
                <div className="contentstuff">
                    <h1 className="contenttilte">Welcome, {ctxFirstName.firstName}!</h1>

                    <p>
                        Please, check out if there is any <Link to="/game" className="articlelink">unnaproved games</Link>.
                    </p>
                </div>
            </div>
        </main>
    );

}

export default Admin;