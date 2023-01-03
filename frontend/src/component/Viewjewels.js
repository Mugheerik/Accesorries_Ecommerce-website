import { useState } from "react";




const menRing=[
    {id:1,quantity:10,image:"https://i.etsystatic.com/19563679/r/il/9d0e11/2751440510/il_fullxfull.2751440510_eedl.jpg",price:"10$"},
    {id:2,quantity:10,image:"https://i.etsystatic.com/19563679/r/il/9d0e11/2751440510/il_fullxfull.2751440510_eedl.jpg",price:"10$"},
    {id:3,quantity:10,image:"https://i.etsystatic.com/19563679/r/il/9d0e11/2751440510/il_fullxfull.2751440510_eedl.jpg",price:"10$"},
    {id:4,quantity:10,image:"https://i.etsystatic.com/19563679/r/il/9d0e11/2751440510/il_fullxfull.2751440510_eedl.jpg",price:"10$"},
    {id:5,quantity:10,image:"https://i.etsystatic.com/19563679/r/il/9d0e11/2751440510/il_fullxfull.2751440510_eedl.jpg",price:"10$"},
    {id:6,quantity:10,image:"https://i.etsystatic.com/19563679/r/il/9d0e11/2751440510/il_fullxfull.2751440510_eedl.jpg",price:"10$"},
   
]
const Viewsring = () => {
const [state,setState]=useState(menRing);


    return ( 
       <div className="container " >
        
      <div className="row">
      {
              state.map((item)=>{
                  return(
                      <div className="col-4 col-md-4 col-lg-3">

                        <div className="card mt-4">
                        
                                <img className="card-img-top" src={item.image} alt=''/>
                            
                            <div className="card-body">
                                 <b >{item.id}</b><br/>
                                 <b>Quantity:</b>{item.quantity}<br/>
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
 
export default Viewsring;