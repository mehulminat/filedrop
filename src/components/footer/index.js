import React from 'react';
import './style.css';
import Logo from '../static/Logo.svg'
import {motion} from 'framer-motion';

const Footer = () => {
    return (
        <div>
            <motion.div className = "footerContainer" initial = {{y : +100}} animate = {{y : 0}}>
                <img className = "logo" src = {Logo} alt = "FileDrop Logo"/>
                <div className = "linkContainer">
                <p className = "about"><a href = "">By Devarshi Doshi</a><span> | </span>Devanshi Bhatt<span> | </span>Ishika Desai</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Footer
