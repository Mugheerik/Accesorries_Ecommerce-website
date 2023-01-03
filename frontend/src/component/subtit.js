import "./sub.css";
const Subtitle = (props) => {
    const name=props.name;

    return (


<h1 className="jt --debug">
  <span className="jt__row">
    <span className="jt__text">{name}</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true">
    <span className="jt__text">{name}</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true">
    <span className="jt__text">{name}</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true">
    <span className="jt__text">{name}</span>
  </span>
</h1>

      );
}
 
export default Subtitle;