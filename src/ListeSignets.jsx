import "./ListeSignets.scss";
import Signet from "./Signet";
import tabSignets from "./data/signets.json";

export default  function ListeSignets(props) {
    return (
      <div className="ListeSignets">
        <ul>
          {tabSignets.map((sig) => (
            <Signet
              key={sig.id}
              id={sig.id}
              titre={sig.titre}
              couleur={sig.couleur}
              dateMod={sig.dateModification}
            />
          ))}
        </ul>
      </div>
    );
  }
  
  