import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import AnimatedBtn from "../AnimatedBtn";

function HomeGreet() {

    const [randomBg, setRandomBg] = useState(null);
    const [randomFg, setRandomFg] = useState(null);

    useEffect(() => {
        let random = parseInt((Math.random() * 2) + 1);
        setRandomBg(`${process.env.REACT_APP_PUBLIC_URL}/images/home_greet/background${random}.png`);
        setRandomFg(`${process.env.REACT_APP_PUBLIC_URL}/images/home_greet/foreground${random}.png`);
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <AnimatedBtn to="/game" label="BROWSE GAMES" />

            </div>
            <div id="brosegamesforeground" style={styleForeground} data-aos="fade-left" data-aos-once="true"></div>
        </div>
    );
}

export default HomeGreet;