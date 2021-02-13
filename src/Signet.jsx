import "./Signet.scss";
import BtnConfig from "./BtnConfig";
import BtnDeplace from "./BtnDeplace";

export default function Signet(props) {

    return(
    <li className="Signet">
        <BtnDeplace/>
        <div className="image">
            <img src={'images-signets/' + props.id + '.webp'} alt={props.titre}/>
        </div>
        <div className="info">
            <h3>{props.titre}</h3>
            <p className="dateDeModif">Modifié: {props.dateMod}</p>
        </div>
        <BtnConfig/>
    </li>
    );
}