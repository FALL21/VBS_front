import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../components/Logo';
import Footer from '../footer';
import Whatsapp from '../whatsapp';

const demande = () => {
    window.location = "/Formulaire_dm";
}
const Services = () => {
    return (
        <>
            <Logo />
            {/* <h1>Nos Services</h1> */}
            <div className="services">
                <div onClick={demande} className="card profile">
                    <h2>MENAGE</h2>
                </div>
                <div onClick={demande} className="card profile1">
                    <h2>LINGERE</h2>
                </div>
                <div onClick={demande} className="card profile2">
                    <h2>COURTIER</h2>
                </div>
                <div onClick={demande} className="card profile4">
                    <h2>ETUDE</h2>
                </div>

            </div>
            <nav>
                <div>
                    <NavLink to='/services/lavage' className={(nav) => (nav.isActive ? "nav-active" : "")} > Services de Lavage</NavLink>
                    <NavLink to='/services/menage' className={(nav) => (nav.isActive ? "nav-active" : "")}> Services de menage</NavLink>
                </div>
            </nav>
            <Whatsapp/>
            <Outlet />
            <Footer />
        </>
    );
};

export default Services;