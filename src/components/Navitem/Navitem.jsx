import "./Navitem.css"
export default function Navitem(props){
    return (
        <div className="Navitem">
            <img className="img" src={props.link} alt="" />
            <p>{props.text}</p>
        </div>
    )
}