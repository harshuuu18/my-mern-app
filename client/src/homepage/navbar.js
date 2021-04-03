import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../App'



const NavBar = () => {
    const {state,dispatch} = useContext(UserContext)
    
    
    return (
        <>
        {/* // <!-- First part for heading --> */}
        <header>
            <div className="title">
                <h1> <Link to={state?"/":"/signin"}> Social</Link></h1>
            </div>
            <div className="username">
                <h3><Link to="/home"> Harsh</Link></h3>
            </div>
        </header>
        {/* // <!-- First part for heading --> */}
        
        </>

    )
}

export default NavBar;