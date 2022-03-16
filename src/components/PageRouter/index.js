import { Routes, Route} from "react-router-dom";
import About from '../../pages/About';
import Admin from "../../pages/Admin";
import Author from '../../pages/Author';
import GameDetails from "../../pages/Game/GameDetails";
import GameList from "../../pages/Game/GameList";
import Genre from '../../pages/Genre';
import Home from '../../pages/Home';
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import PublisherDetails from "../../pages/Publisher/PublisherDetails";
import PublisherList from "../../pages/Publisher/PublisherList";
import ProtectedRoutes from "../ProtectedRoutes";

function PageRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<GameList />} />
            <Route path="/game/:gameid" element={<GameDetails />} />
            <Route path="/publisher" element={<PublisherList />} />
            <Route path="/publisher/:publisherid" element={<PublisherDetails />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/author" element={<Author />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/admin" element={<Admin />} />
            </Route>
        </Routes>
    );
}

export default PageRouter;