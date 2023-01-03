
import { useState } from "react";
import { Link } from "react-router-dom";
import {  Card, Form, Row } from "react-bootstrap";


// import './Signup.css'

function Signup() {
const[name,setName]=useState();
const[username,setUsername]=useState();
const[email,setEmail]=useState();
const[password,setPassword]=useState();



const handleSubmit = (e) => {
   
        e.preventDefault();
             
        console.log("submitted")
        
  
}
const handleChange = (e) => {
  
if(e.currentTarget.name==="Name")
{
const newname=e.currentTarget.value;
setName(newname);
console.log({name})
}
else if(e.currentTarget.name==="user")
{
const newusername=e.currentTarget.value;
setUsername(newusername);

}
else if(e.currentTarget.name==="email")
{
const newemail=e.currentTarget.value;
setEmail(newemail);
}
else if(e.currentTarget.name==="pass")
{
const newpassword=e.currentTarget.value;
setPassword(newpassword);
}
   
}
 

 


   return(
    <div className="container">
        

    <div className="row m-4">

        

  <div className="col-md-4  ">
<Card className="Card1">
    <Form onSubmit={handleSubmit}>
        <Card.Title>
        <h1  >Sign Up</h1>
        </Card.Title>
        <Card.Body>
        <Row>
        <Form.Label >NAME</Form.Label>
        <Form.Control 
        type="text"
        onChange={handleChange}
        value={name}
        name="Name"
        className="rounded-pill"/>
        </Row>
        <Row>
        <Form.Label >Username</Form.Label>
        <Form.Control 
         onChange={handleChange}
        type="text"
        name="user"
        value={username}
        className="rounded-pill"/>
        </Row>
        <Row>
        <Form.Label >Email</Form.Label>
        <Form.Control 
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
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
        <Row style={{paddingTop:5}} >
      <Link className="btn btn-outline-info rounded-pill Link" to="/Home" >Submit</Link>
        </Row>
        </Card.Body>
    </Form>
    </Card> 
    </div>  
   
    </div>


</div>
   );

  
}

export default Signup;