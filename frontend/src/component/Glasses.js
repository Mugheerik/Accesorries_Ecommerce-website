import Viewglass from "./viewglasss";
import Marquee from "./marquee";


const Glasses = () => {
    return ( 
        <div className="container mt-5">
            
                <div className="g-col-12">

                
                <div className="card mt-2 ms-2">
                
                <Marquee name="GLASSES"/>
                
                </div>
                   
                       <div className="g-col-12 mt-4">
                    
                        <Viewglass/>
                        </div> 
                       
                            
                         
                    
                </div>
           
       
        </div>
     );
}
export default Glasses;
