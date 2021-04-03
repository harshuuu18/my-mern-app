import React from 'react'
import { Link } from 'react-router-dom'
import Dm from '../img/msg2.png'
import HomeImg from '../img/home.png'
import BoyImg from '../img/boy.png'



const BottomNav = () => {
    return (
        
        <nav>
            <Link to="/dms"><img src={Dm}></img></Link>
            <Link to="/"><img src={HomeImg} className="home-image"></img></Link>
            <Link to="/profile"><img src={BoyImg}></img></Link>
        </nav>

    )
}

export default BottomNav;