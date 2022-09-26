import React from 'react';
import Logo from '../components/Logo';
// import 'bootstrap/dist/css/bootstrap.min.css'

const Prestataire = () => {
    return (
     <div className="agence-page">
        <Logo />
        <h1>Liste des Prestataires</h1>
            <div> 
                 <iframe src="https://docs.google.com/spreadsheets/d/1ZJ3W696AK-EexbNnHsequ9Ed1ANMWtcV9DYeRbMAnJU/edit?usp=sharing" 
        width="640" 
        height="642" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
    >
        Chargement…
    </iframe>
            </div>
         </div>
    );
};

export default Prestataire;

