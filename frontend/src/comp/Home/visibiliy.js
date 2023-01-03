import { Link } from "react-router-dom";
import Newcard from "../slide/card";
import Prodcard from "./prodcard";
const Thirdcomp = () => {


    return (
        <div className="container">
            <div className="row">
<div className="col-3 ms-4">

 <Link to="/jewel">
       <Newcard pic="https://i.pinimg.com/originals/8d/be/f3/8dbef3307b3771346b6c3c283ab6ed1e.jpg "  name="JEWELLERY"/>
        </Link>
</div>
     <div className="col-3 ms-4">


        <Link to="/watch">

       <Newcard pic="https://th.bing.com/th/id/OIP.z7Q5Eb54YEUOMEgVoY2FYwDIEs?pid=ImgDet&w=236&h=354&rs=1 "  name="WATCHES"/>
        </Link>
     </div>
   
   <div className="col-3  ms-4">

        <Link to="/glass">

       <Newcard pic="https://th.bing.com/th/id/R.ddd4ac5c9cf2207033e3b6f0ff11999a?rik=ASE9PXvqbwG4Tw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-ES17SKGlSiA%2fUoTqwVzIVjI%2fAAAAAAAAgk0%2fgllup0svBt4%2fs790%2fstreetstyle10320-web.jpg&ehk=fepfTpoR6c%2bY%2b1OjtuflR1ZKYi11JyClZc2PKbb%2fWRs%3d&risl=&pid=ImgRaw&r=0"  name="GLASSES"/>
        </Link>
   </div>
            </div>
     
          </div>

    
     


     
        

       

      );
}
 
export default Thirdcomp;