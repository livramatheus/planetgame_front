import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PageRouter from './components/PageRouter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ScrollToTop from "./components/ScrollToTop";

function App() {

    const theme = createTheme({
        palette: {
            mode: 'dark'
        },
        status: {
            bgtableeven: 'var(--coloreven)',
            bgtableodd:  'var(--colorodd)',
            bgtableheader: 'var(--colorheader)',
            txttable: 'var(--text-1)',
            bdrtable: 'var(--color3)',
        },
    });

    return (
        <Router>
            <ScrollToTop />
            
            <ThemeProvider theme={theme}>
                <NavBar />
                <PageRouter />
                <Footer />
            </ThemeProvider>
        </Router>
    );
}

export default App;