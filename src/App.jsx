import React, { Fragment } from "react";
import {Card, Col, Container,  Row} from "react-bootstrap";
import './App.css';
import Input from "./components/input";


function App() {
  
    // const [num,setNum] = React.useState(0);
    const [userDetails, setUserDetails]=React.useState({
      name:"",
      email:"",
      message:""
    });
  
   return (
    <Fragment>
       {/* <Nav name='Logo' />  */}
      <Container  as={"section"} fluid>
      <Row>
        <Col className="col-lg-7 col-md-7 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
            <Card className="border radius-30 card-width px-4 py-5">
              <Card.Title className="ps-3"><h2 className="fw-bold pt-5 pb-3">Get started with a free quotation</h2></Card.Title>
              <Card.Body>
                <form className="mb-5"> 
                    <div className="input-group-lg mb-3">
                      <Input label={'Name'} type={'text'} placeholder={'Enter your Name'} onChange={(name) =>{
                        setUserDetails({
                          ...userDetails, name,
                        });
                      }}/>
                    </div>
                    <div className="input-group-lg mb-3">
                      <Input label={'Email'} type={'email'} placeholder={'Enter a valid email address'} onChange={(email)=>{setUserDetails((state)=>{return{...state,email};
                      });
                    }}/>
                    </div>
                    <div className="input-group-lg">
                      <Input label={'Message'} type={'textarea'} placeholder={"Enter your message"}/>
                    </div>
                    <div class="form-check pt-3">
                      
                      <label class="form-check-label fs-5" htmlFor="flexCheckDefault">
                      <input class="form-check-input fs-5 " type="checkbox" value="" id="flexCheckDefault"/>
                        I accept the <span style={{color: '#d443dd'}}>Term Of Service</span> 
                      </label>
                    </div>
                    <button className="btn btn-bg text-white btn-height btn-radius fs-2 btn-group-lg h-50 mt-3 w-100 ">Submit your request</button>
                  </form>
              </Card.Body>
            </Card>
        </Col>
     

       
        <Col className="col-lg-5 col-md-5 col-sm-12 col-xs-12 mt-5">
        <Card className="py-5 px-5">
          <Card.Title> <h3>User Details</h3> </Card.Title>
            <Card.Body>
            <div>
              <p>Name: {userDetails.name}</p>
              <p>Email: {userDetails.email}</p>
            </div>

            </Card.Body>
         

        </Card>
          
     
        </Col>
      </Row>
      </Container>
    </Fragment>
  );
     
}

export default App;