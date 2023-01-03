import "../slide/carrd.css";
const Prodcard = (props) => {
 const name=props.name;
   const pic=props.pic;
  
    return ( 
         <div className="padd ">

            <div className="card carrd  text-bg-dark">
  <img src={pic} className="card-img" alt="..." style={{width:"40vw",height:"50vh"}}/>
  <div className="card-img-overlay">
    <h3 className="card-title  textt "><b>{name}</b></h3>
    
  </div>
         </div>
</div>
         

     );
}
 
export default Prodcard;