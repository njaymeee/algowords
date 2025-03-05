import React from 'react';
// import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="bg-blue-500 flex items-center p-4 font-bold font-sans text-3xl sticky">
            <img src="../public/logofinal.svg" alt="Logo" className="h-10 w-10 mr-4" />
            <Link to={"/home"}>
            <h1 className="text-white text-center flex-grow">
                ALGOWORDS
            </h1>
            </Link>
        </header>
    );
};

export default Header;