import React from 'react';

import Hero from './Hero';
import CreateTicket from './CreateTicket';

import Navbar from '../Navbar';
import Footer from '../Footer';

function SupportPage() {
    return ( 
        <>
        <Navbar/>
        <CreateTicket/>
        <Hero/>
        <Footer/>
        </>
     );
}

export default SupportPage;