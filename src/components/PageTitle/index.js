import { useState, useEffect } from "react";

function PageTitle(props) {
    
    const [randomBg, setRandomBg] = useState(null);
    
    let { title } = props;
    
    const styleDiv = {
        width: '100%',
        height: '20rem',
        backgroundImage: `url(${randomBg})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

    const styleH1 = {
        fontSize: '15rem',
        lineHeight: '15rem',
        height: '15rem',
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
        setRandomBg(`${process.env.REACT_APP_PUBLIC_URL}/images/pgbn${random}.jpg`);
    }, []);

    return (
        <div style={styleDiv} >
            <h1 style={styleH1}>{title}</h1>
        </div>
    );
}

export default PageTitle;