import { useState, useEffect } from "react";
import useResponsive from "../../hooks/useResponsive";

function PageTitle(props) {
    
    let { title } = props;
    
    const [randomBg, setRandomBg] = useState(null);
    const isResponsive = useResponsive();

    const divHeight = isResponsive ? '10rem' : '20rem';
    
    const styleDiv = {
        width: '100%',
        height: divHeight,
        backgroundImage: `url(${randomBg})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

    const styleH1 = {
        fontSize: '16vw',
        lineHeight: '16vw',
        height: '16vw',
        color: 'white',
        opacity: '0.1',
        overflow: 'hidden',
        width: '100%',
        margin: '0',
        textTransform: 'uppercase',
        fontFamily: `'Abel', 'sans-serif'`
    }

    useEffect(() => {
        let random = parseInt((Math.random() * 4) + 1);
        setRandomBg(`${process.env.REACT_APP_PUBLIC_URL}/images/page_title/pgbn${random}.jpg`);
    }, []);

    return (
        <div style={styleDiv} >
            <h1 style={styleH1}>{title}</h1>
        </div>
    );
}

export default PageTitle;