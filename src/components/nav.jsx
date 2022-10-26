// import { Row, Col } from "react-bootstrap";
import IMAGES from "../assets/img/images";

const Nav = ({name}) => {
    return (
    // <Row className="">
    //     <Col lg={10} md={10} sm={10}>
    //     <p className="ps-5">{name}</p>
    //     </Col>
    //     <Col lg={2} md={2} sm={2}>
    //     <img className="menu-w" src={IMAGES.menu_icon} alt='menu-icon' width={30} height={30}/>
    //     </Col>
    // </Row>
    <div className="row">
        <div className="col">
        <p className="ps-5">{name}</p>
        </div>
        <div className="col">
        <img className="menu-w" src={IMAGES.menu_icon} alt='menu-icon' width={30} height={30}/>

            
        </div>

    </div>

    );
};

export default Nav;