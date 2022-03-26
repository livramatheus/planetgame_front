import HomeGreet from "../components/HomeGreet";
import { Helmet } from "react-helmet";

function Home(props) {
    return (
        <>
            <Helmet>
                <title>Home Page - Planet Game</title>
            </Helmet>
            <HomeGreet />
        </>
    );
}

export default Home;