import React, { useState } from 'react';
import Logo from '../components/Logo';
import axios from 'axios';
import Footer from './footer';
import Whatsapp from './whatsapp';

const Demande = () => {

    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [adresse, setAdresse] = useState('');
    const [phone, setPhone] = useState('');

    const handleDemande =  (e) => {
        e.preventDefault();

    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/post`,
        // withCredentials: true,
        data: {
            name,
            service,
            adresse,
            phone,
        },
    })
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });

    };


    return (
        <div>
            <Logo /> <br />

            <div>

                    {/* <form action="" onSubmit={handleDemande} id="sign-up-form" >
                        <label htmlFor="name">Prenom et Nom</label>
                        <br />
                        <input
                            type="text"
                            name='name'
                            id='name'
                            onChange={(e) => setName(e.target.value)}
                            value={name} className="champ" />
                        <br /> <br />
                        <label htmlFor="service"> Service </label>
                        <br />
                        <input
                            type="text"
                            name='service'
                            id='service'
                            onChange={(e) => setService(e.target.value)}
                            value={service} className="champ" />
                        <br /> <br />
                        <label htmlFor="adresse">Adresse</label>
                        <br />
                        <input
                            type="text"
                            name='adresse'
                            id='adresse'
                            onChange={(e) => setAdresse(e.target.value)}
                            value={adresse} className="champ" />
                        <br /> <br />
                        <label htmlFor="phone">Numero telephone</label>
                        <br />
                        <input
                            type="number"
                            id='phone'
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone} className="champ" />
                        <br /> <br />
                        <input type="submit" value="Envoyer" id='sub' />
                    </form> */}
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScuWZfEAhfkbSgsQCEXBgxbOpzozwQE5N712PBhIs36rGRUcw/viewform?embedded=true" width="400" height="776" frameborder="0" text-align="center" marginheight="0" marginwidth="0">Chargement…</iframe>
                  </div>

                  <Whatsapp/>
                  <Footer />
        </div>
    );
};

export default Demande;