function Backdrop(props) {

    let { handleMenuHamburger } = props;

    return <div className="backdrop" onClick={() => handleMenuHamburger()} ></div>
}

export default Backdrop;