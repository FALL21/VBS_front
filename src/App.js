import React, { useEffect, useState } from "react";
//import { UidContext } from "./components/AppContext"; 
//import axios from "axios"; 
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home';
import Agence from './pages/Agence';
import Services from './pages/Services/Services';
import Navbar from './components/Navebar/Navbar';
import Lavage from './pages/Services/Lavage/lavage';
import Menage from './pages/Services/menage/menage';
import Post from "./pages/Post";
import Demande from "./pages/Formulaire_dm";
import Prestataire from "./pages/Prestataires";
import { useMediaQuery } from "react-responsive";
//import { replaceOne } from "../../models/user.model";


const App = () => {
  


  const user = localStorage.getItem('token')

  return (
    // <UidContext.Provider value={uid}>
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />}>        
          <Route path='/Services/lavage' element={<Lavage />}/>
          <Route path='/Services/menage' element={<Menage />}/>
        </Route> 
        <Route path='/Agence' element={< Agence />} />
        <Route path='/Prestataire' element={<Prestataire />}/>

        {user && <Route path='/Post' element={< Post />} />}
        <Route path='/Post' element={ <Navigate replace to ="/agence" /> } />

        <Route path='/Formulaire_dm' element={< Demande />} />

      </Routes>
      </>
    // </UidContext.Provider>
  );
  };

export default App; 