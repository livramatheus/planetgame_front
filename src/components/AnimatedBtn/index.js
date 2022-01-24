import { Link } from "react-router-dom";

function AnimatedBtn(props) {
    return (
        <Link to={props.to} className="animatedbtn">
            {props.label}
        </Link>
    );
}

export default AnimatedBtn;