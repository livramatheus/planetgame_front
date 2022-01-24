import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PageRouter from './components/PageRouter';

function App() {
    return (
        <Router>
            <NavBar />
            <PageRouter />
            <Footer />
        </Router>
    );
}

export default App;