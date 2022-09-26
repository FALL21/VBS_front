import React, { useEffect, useState } from "react";
import Logout from "../components/Log/logout";
import Logo from "../components/Logo";
import axios from "axios";


// import 'bootstrap/dist/css/bootstrap.min.css' 

const Liste = () => {
    window.location = "/Prestataire";
}

const Post = () => {
    const [data, setData] = useState([]);
    // Le useEffect se joue lorsque le composant Post est monté
    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/post`,
        }).then((res) => setData(res.data));
    }, []);

    return (

        <div className="welcome">
            <Logout /> <button onClick={Liste}>PRESTATAIRES</button>
            <Logo signin={true} signup={true} />
            <h1> Liste des demandes de service </h1> <br />

            {/* <table  class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Nom et Prenom</th>
                        <th scope="col">Service</th>
                        <th scope="col">Adresse</th>
                        <th scope="col">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                        {data.map((post) => (
                            <tr>{post.name}</tr>
                        ))}
                    </td>
                    <td>
                        {data.map((post) => (
                            <tr>{post.service}</tr>
                        ))}
                    </td>
                    <td>
                        {data.map((post) => (
                            <tr>{post.adresse}</tr>
                        ))}
                    </td>
                    <td>
                        {data.map((post) => (
                            <tr>{post.phone}</tr>
                        ))}
                    </td>

                </tbody>
            </table> */}

    <iframe src="https://docs.google.com/spreadsheets/d/15crJqiz4oyXhTDa05ULxXyhtk_cqhZGknqVBzkFrpCg/edit?usp=sharing" 
        width="640" 
        height="642" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
    >
        Chargement…
    </iframe>

                          
    
        </div>
    );
};

export default Post; 