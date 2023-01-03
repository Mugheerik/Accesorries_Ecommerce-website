import { useState } from "react";
import { Row ,Form, Card} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import './Signin.css'
 

const Signin = () => {


const [username,setUsername]=useState();
const[password,setPassword]=useState();


const handleSubmit=(e)=>{
e.preventDefault();

}


    const handleChange = (e) => {
  
       
         if(e.currentTarget.name==="user")
        {
        const newusername=e.currentTarget.value;
        setUsername(newusername);
        
        }
        
        
        else if(e.currentTarget.name==="pass")
        {
        const newpassword=e.currentTarget.value;
        setPassword(newpassword);
        }
           
        }




    return ( 
<div  className="container sign">
    

<div className="col-md-3 col-lg-4 col-4 mt-4 " >
    <Card  className="extra cardd"  >
    <Form onSubmit={handleSubmit}>
       <Card.Title>
    
        <h1  >Sign in</h1>
        </Card.Title>
        <Card.Body>
      <Row >
        <Form.Label >Username</Form.Label>
        <Form.Control 
         onChange={handleChange}
        type="text"
        name="user"
        value={username}
        className="rounded-pill"/>
        </Row>
        
        <Row>
        <Form.Label >Password</Form.Label>
        <Form.Control 
        type="Password"
        name="pass"
        onChange={handleChange}
        value={password}
        className="rounded-pill"/>
        </Row>
        <Row style={{paddingBlockStart:20}}>
      <button 
      
       className="btn btn-outline-info rounded-pill">Submit</button>
        </Row>
        </Card.Body>
    </Form>
    </Card>
    </div>
  
    </div>
  


     );
}
 
export default Signin;