import { useState } from "react";
import { Link } from "react-router-dom";
import Newcard from "./card";
import "./carosel.css";
const Carosel = () => {
    const data=[
        {name:"JEWELLERY",pic:"https://th.bing.com/th/id/OIP.X5CjqPGRVjlT5h5eJu8vjgHaLF?pid=ImgDet&w=683&h=1023&rs=1", path:"/jewel"},
        {name:"GLASSES",pic:"https://i.pinimg.com/originals/a2/86/60/a286607aef4e3f3e199be6d9ee2bba85.jpg", path:"/glass"},
        {name:"WATCHES",pic:"https://th.bing.com/th/id/R.fa95b94fb35f14a05c58bb8528ba5823?rik=QEX38kmo6cVczw&pid=ImgRaw&r=0", path:"/watch"},
        {name:"CHAINS",pic:"https://i.pinimg.com/originals/04/9d/a5/049da5ca157faa9e12d41cfcb81b56f7.jpg", path:"/jewel"},
        {name:"SUN-GLASSES",pic:"https://th.bing.com/th/id/OIP.wwLlQzbayTpkS7PZ00q8rgHaLH?pid=ImgDet&w=700&h=1050&rs=1", path:"/glass"},
        {name:"WATCHES",pic:"https://th.bing.com/th/id/OIP.-qQ7wzRhK7gLHIVHoMM5zAHaLG?pid=ImgDet&w=191&h=286&c=7&dpr=1.3", path:"/watch"},
        {name:"BRACELETS",pic:"https://i.pinimg.com/474x/de/f7/90/def790a640b4db0f6d35fcc7b1dc0461--paparazzi-jewelry-paparazzi-accessories.jpg", path:"/jewel"},
    ]
    const [state,setState]=useState(data);



    return ( 
        <div className="body">
            

  <div className="container1">
      <div className="slide-container p-2">
    {state.map((item)=>{
        return(
            
            
            <div className="slide-image">
    {/* <img src="https://i.pinimg.com/474x/fc/06/34/fc0634ad46238a4b4fe7cac66d367453.jpg" alt=""/> */}
    <Link to={item.path}>

   <Newcard pic={item.pic} name={item.name}  widthh="30vw" heightt="40vh" />
    </Link>
    </div>
    )
})}
</div>
    
    </div>
  </div>


     );
}
 
export default Carosel;