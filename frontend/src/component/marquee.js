import "./mar.css";
const Marquee = (props) => {

const name=props.name;
    return ( 
       
<marquee class="GeneratedMarquee" direction="left" scrollamount="30" behavior="alternate">{name}</marquee>


     );
}
 
export default Marquee;