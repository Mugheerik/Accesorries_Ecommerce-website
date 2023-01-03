import "./carrd.css";
const Newcard = (props) => {
 const name=props.name;
   const pic=props.pic;
    return ( 
         <div className="padd">

            <div className="card carrd g-col-3 text-bg-dark">
  <img src={pic} className="card-img" alt="..." style={{width:"20vw",height:"60vh"}}/>
  <div className="card-img-overlay">
    <h3 className="card-title  textt ">{name}</h3>
    
         </div>
  </div>
</div>
         

     );
}
 
export default Newcard;