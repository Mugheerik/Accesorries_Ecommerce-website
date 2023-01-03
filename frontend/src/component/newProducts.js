import { useState } from "react";
import { Card, Row,Button } from "react-bootstrap";


const Newproducts = () => {

    const Jewellery=(props)=>{
const initial=[
    {id:1,product:"jewel", quantity:40},
    {id:1,product:"jewel", quantity:40},
]
const [state,setState]=useState(initial)

const handleclick =()=>{
    
  const newData=  state.filter((jewell)=>jewell.quantity=jewell.quantity-1)
  setState(newData);
}
    const handlechange=(id)=>{
    const newData = state.filter((jewell)=>jewell.id!==id)
    setState(newData);
   
     }
     const[input,setInput]=useState("");
const handleinput=(e)=>{
const input=e.currentTarget.value;
setInput(input);
    
  
     }
 
return(
    <div >
{
    state.map((jewel,key)=>{
        return(
            <div>
<label>id:{jewel.id}</label>
<label>product:{jewel.product}</label>
<label>quantity:{jewel.quantity}</label>
<button onClick={handleclick} className="btn btn-outline-success" > purchase</button>
<Button onClick={(e)=>handlechange(jewel.id)} > remove</Button>
<input type="text" onChange={handleinput} ></input>
{input}

          </div>
        )
    
    }
    )

}
        
    </div>
     

)

    }
const Categories = (props) => {
    var name=props.name;

    return ( 
        <b>{name}</b>
     );
}
 

    return ( 
      <div className="conatiner form ">
        <Row>
            <div className="col-3">
           <Card>
                <Categories name="jewel"/><br/>
                <Categories name="glasses"/><br/>
                <Categories name="watches"/><br/>
                </Card>
            </div>
        <div className="col-7">
            <Card>
                <Jewellery/>
                
            </Card>
                
            </div>
        </Row>
        
        
      </div>
     );
}
 
export default Newproducts;