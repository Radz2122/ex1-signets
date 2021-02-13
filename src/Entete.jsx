import "./Entete.scss";
import { useState } from "react";

export default function Entete(props) {
  return (
    <header className="Entete">
      <div>Signet</div>
      <div className="navUtil">
        <div>Nom, Prénom</div>
        <div>Icone</div>
      </div>
    </header>
  );
}
