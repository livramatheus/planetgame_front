import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import AnimatedBtn from "../AnimatedBtn";

function HomeGreet() {

    const [randomBg, setRandomBg] = useState(null);
    const [randomFg, setRandomFg] = useState(null);

    useEffect(() => {
        let random = parseInt((Math.random() * 5) + 1);
        setRandomBg(`${process.env.REACT_APP_PUBLIC_URL}/images/home_greet/background${random}.webp`);
        setRandomFg(`${process.env.REACT_APP_PUBLIC_URL}/images/home_greet/foreground${random}.webp`);
    }, []);

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    });

    const styleBackground = {
        backgroundImage: `url(${randomBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const styleForeground = {
        backgroundImage: `url(${randomFg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '90%',
        height: '100%',
        width: '40%'
    }

    return (
        <div id="homegreet" style={styleBackground}>
            <div id="browsegamesinfo" data-aos="fade-right" data-aos-once="true">
                <div>
                    PlanetGame is a game database prototype website. Here you can find information about games, genres and publishers.
                    <br />
                    Didn't found your game? You can fill out the form and send it for approval.
                </div>
                <AnimatedBtn to="/game" label="BROWSE GAMES" />
            </div>
            <div id="brosegamesforeground" style={styleForeground} data-aos="fade-left" data-aos-once="true"></div>
        </div>
    );
}

export default HomeGreet;