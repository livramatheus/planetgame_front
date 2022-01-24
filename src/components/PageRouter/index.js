import { Routes, Route} from "react-router-dom";
import Game from '../../pages/Game';
import Genre from '../../pages/Genre';
import Home from '../../pages/Home';
import Publisher from '../../pages/Publisher';

function PageRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/publisher" element={<Publisher />} />
            <Route path="/genre" element={<Genre />} />
        </Routes>
    );
}

export default PageRouter;