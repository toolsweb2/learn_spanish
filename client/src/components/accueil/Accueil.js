import React, { useState, useEffect } from "react";

const Accueil = () => {
  useEffect(() => {}, []);

  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <body className="container-accueil">
      <div className="info-accueil">
        <h1> J'apprends l'espagnol</h1>
        <p>Apprenez l'espagnol facilement</p>
        <p1>et validez votre progression !</p1>
      </div>
    </body>
  );
};

export default Accueil;
