import { Routes, Route} from "react-router-dom";
import About from '../../pages/About';
import Author from '../../pages/Author';
import Game from '../../pages/Game';
import Genre from '../../pages/Genre';
import Home from '../../pages/Home';
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import Publisher from '../../pages/Publisher';

function PageRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/publisher" element={<Publisher />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/author" element={<Author />} />
        </Routes>
    );
}

export default PageRouter;