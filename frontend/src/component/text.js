import "./text.css";
const Text = (props) => {
    const name=props.name;
    return ( 
       

        <span className="cssload-loader card mt-4   ">{name}</span>
      
     );
}
 
export default Text;