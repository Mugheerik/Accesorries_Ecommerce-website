import { useState } from "react";




const menRing=[
    {id:1,quantity:10,image:"https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1",price:"10$"},
    {id:2,quantity:10,image:"https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1",price:"10$"},
    {id:3,quantity:10,image:"https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1",price:"10$"},
    {id:4,quantity:10,image:"https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1",price:"10$"},
    {id:5,quantity:10,image:"https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1",price:"10$"},
    {id:6,quantity:10,image:"https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1",price:"10$"},
   
]
const Viewglass = () => {

    const [state,setState]=useState(menRing);
    const handleChange=(quantity)=>{
        const newdata=state.filter((neww)=>neww.quantity===quantity-1)
        setState(newdata);
    }

    

    return ( 
       <div className="container ">
        
      <div className="row ">
      {
              state.map((item)=>{
                  return(
                     

<div className="col-4 col-md-4 col-lg-3">

<div className="card mt-4 ">

        <img className="card-img-top" src={item.image} alt=''/>
    
    <div className="card-body">
         <b >{item.id}</b><br/>
         <b>Quantity:</b>{item.quantity} <br/>
         <b>Price:</b>{item.price}<br/>
         <button className="btn btn-outline-info">Purchase</button>
    </div>

</div>
                      
                      
                     
                      
                      
                      
      </div>
                      )
                    })
                    
                }


          
                
                </div>
                
               </div> 
                
        
     )
}
 
export default Viewglass;