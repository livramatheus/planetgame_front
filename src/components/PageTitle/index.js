function PageTitle(props) {
    
    let { title } = props;
    
    const styleDiv = {
        width: '100%',
        height: '20rem',
        backgroundImage: `url(${process.env.REACT_APP_PUBLIC_URL}/images/pgbn1.jpg)`,
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

    return (
        <div style={styleDiv} >
            <h1 style={styleH1}>{title}</h1>
        </div>
    );
}

export default PageTitle;