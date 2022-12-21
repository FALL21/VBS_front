import React from 'react';
import Logo from '../components/Logo';
import Footer from './footer';
import Whatsapp from './whatsapp';




const demande = () => {
    window.location = "/Formulaire_dm";
}


const Home = () => {


let img_name ="";


    const popup = (service_name) => {
        switch (service_name) {
            case "lr":
                img_name = "catologue.png"
                break;
        
            default:
                break;
        }
        

        const modal = document.querySelector(".modal");
        const overlay = document.querySelector(".overlay");

        // close the modal when the close button and overlay is clicked
        overlay.classList.add("hidden");
        overlay.addEventListener("click", closeModal);

        // close modal when the Esc key is pressed
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && !modal.classList.contains("hidden")) {
                closeModal();
            }
        });


        // open modal function
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");


        // open modal event


    }

            // close modal function
    const closeModal = function () {
        const modal = document.querySelector(".modal");
        const overlay = document.querySelector(".overlay");

        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    };

   

        return (
            <>
                
                <section class="modal hidden" >
                    <carousel class="flex">
                        <img className='imgctl' src={`./img/${img_name}`} width="500px" height="500px" alt="catalogue" />
                        {/* <button onClick={closeModal} className="btn-close">⨉</button> */}
                    </carousel>
                    
                    <button onClick={demande} class="btnd">Lancer la Demande</button>
                </section>
    
                <div class="overlay hidden"></div>


                <Logo />
                <div className="home">
                    <h1> Ici vos besoins sont nos missions </h1>
                    <br />
                    <h3>Trouvez le prestataire idéal pour tous vos services du quotidien</h3>
                </div>
                {/* <div className='services'>
                    <img src="./imgt/traiteur.jpg" alt="" />
                    <img src="./imgt/lingere.jpg" alt="" />
                    <img src="./imgt/courtier.jpg" alt="" />
                    <img src="./imgt/service.jpg " alt="" />
                    <img src="./imgt/voix off.jpg" alt="" />
                    <img src="./imgt/travaux public.jpg" alt="" />
                    <img src="./imgt/immobilier.jpg" alt="" />
                    <img src="./imgt/eleve3.jpg" alt="" />
                    <img src="./imgt/alimentation.jpg" alt="" />
                    <img src="./imgt/prestation.jpg" alt="" />
                    <img src="./imgt/vulgarisateur.jpg" alt="" />
                    <img src="./imgt/location.jpg" alt="" />
    
                </div> */}
                <div className="services">
                    <div onClick={demande} className="card profile">
                        <h2>MENAGE</h2>
                    </div>
                    <div onClick={popup("lr")} class="btn btn-open" className="card profile1">
                        {/* <button class="btn btn-open">+</button> */}
                        <h2>LINGERE</h2>

                    </div>
                    <div onClick={demande} className="card profile2">
                        <h2>COURTIER</h2>
                    </div>
                    <div onClick={demande} className="card profile3">
                        <h2>TRAITEUR</h2>
                    </div>
                    <div onClick={demande} className="card profile5">
                        <h2>LOCATION</h2>
                    </div>
                    <div onClick={demande} className="card profile6">
                        <h2>IMMOBILIER</h2>
                    </div>
                    {/* <div onClick={demande} className="card profile7">
                        <h2>VOIX OFF</h2>
                    </div> */}
                    <div onClick={demande} className="card profile8">
                        <h2>ALIMENTATION</h2>
                    </div>
                    <div onClick={demande} className="card profile4">
                        <h2>ETUDE</h2>
                    </div>
                    {/* <div onClick={demande} className="card profile9">
                        <h2>PRESTATION</h2>
                    </div> */}
                    {/* <div onClick={demande} className="card profile10">
                        <h2>VULGARISATEUR</h2>
                    </div>
                    <div onClick={demande} className="card profile11">
                        <h2>TRAVAUX</h2>
                    </div> */}
                </div>




                <Whatsapp />


                <Footer />
            </>
        );



};

export default Home;

