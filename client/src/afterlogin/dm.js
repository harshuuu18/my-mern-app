import React from 'react'
import { Link } from 'react-router-dom'
import Dm from '../img/msg2.png'
import HomeImg from '../img/home.png'
import BoyImg from '../img/boy.png'


const AllDms = () => {
    return (
        
        <div class="dm">
            <div class="profile-pic">
                <img src={BoyImg} ></img>    
            </div>
            <div class="dm-info">
                <h3>Vivek</h3>
                <h6>Hi</h6>
            </div>
            <div class="notify">
                <div class="notify-circle">
                    1
                </div>
            </div>
        </div>

    )
}

export default AllDms;