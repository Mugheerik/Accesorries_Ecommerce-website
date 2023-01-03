import { useState } from "react";
import { Button, Card,  Row } from "react-bootstrap";

import { Form } from "react-bootstrap";


const Products = () => {
    // internal css
const mystyle = {
    color:"green",
    textAlign:"center"
}
// using props
    const Category = (props) => {
        
        var name=props.name;
        return ( 
            // using controlled element
            <b>{name}</b>
         );
    }
    // using useState hook 
const Jewellery = () => {
    const jewellery=[
        {id:1 , type:" Women",quantity: 10 },
        {id:2 , type:" Women",quantity: 10 },
        {id:3 , type:" Women",quantity: 10 }
    ]
    const [state , setState]=useState(jewellery);

    const handlepurchase =()=>{
        // using filter
      const newData=  state.filter((jewel)=>jewel.quantity=jewel.quantity-1)
      setState(newData);
    }

    return ( 
        
            <div>
                {/* using map */}
             {state.map((jewel,key)=>{
             

            return(
               
                <div  >
                  <Card >
                    <Card.Body  >
                       
                    <b>TYPE=</b>  {jewel.type}
                    <b> QUANTITY = </b> {jewel.quantity}
                    <Button onClick={handlepurchase}>purchase</Button>
                    </Card.Body>
                    <Card.Title>
                        <b>ID=</b> {jewel.id}

                    </Card.Title>
                  </Card>
                </div>
               
            )
         })
        }  
        </div>
       
     );
}


const Events=()=>{
    const [name,setName]=useState("")
    const handleClick=()=>{
        alert("one clicked")
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       alert("value submitted")
    }
  
    const handleChange=(e)=>{ 
        if(e.currentTarget.name==="Name")
        {
        const newname=e.currentTarget.value;
        setName(newname);
        console.log({name})
        }
    }
    

return(
    <div  >
        <Form onSubmit={handleSubmit}>

        <Button onClick={handleClick} >one</Button>
        <Form.Label >Name</Form.Label>
        <Form.Control 
         onChange={handleChange}
        type="text"
        name="Name"
        value={name}
        className="rounded-pill"/>
        <Form.Control 
        type="submit"
        name="submit"
        className=" btn btn-outline-success rounded-pill"/>
        </Form>
        {name}
    </div>
)   
}


    return ( 
     <div className="container" style={mystyle}>
        <Row>
            {/* using external css class:trouble */}
            <div className="  col-3" >
                <Card >
                    <Card.Header> PRODUCTS</Card.Header>
                    <Card.Body>
                        <ul>
                            {/* using controlled component */}
                            {/* explaning source of truth to have more properties assigned to this component we need to change it in its componentfunction because it is its source of truth */}
                            <li><Category name="Jewellery"/></li>
                            <li><Category name="Watches"/></li>
                            <li><Category name="Glasses"/></li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
            {/* using inline css */}
            <div className="col-9" >
                
                    <Card  >
                        <Card.Header>Jewellery</Card.Header>
                                
                        <Card.Body>
                            
                        
                           <Row>

                                <div className="col-8">
                            <Jewellery />
                                </div>
                            <div className="col-4">
                            <Events />
                            </div>
                           
                           </Row>
                                
                               
                                
                               
                               
                            
                        
                        </Card.Body>
                    </Card>
                       
                    
            </div>
        </Row>
     </div>
     );
}

 
export default Products;