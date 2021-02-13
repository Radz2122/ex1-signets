import './Appli.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';
import BtnAjouterSignet from './BtnAjouterSignet';

export default function Appli() {
  return (
    <div className="Appli">
       <Entete />
       <section className="contenuPrincipal">
        <ListeSignets />
      </section>
      <BtnAjouterSignet/>
    </div>
  );
}
