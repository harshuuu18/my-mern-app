import React, {useEffect,useState,useContext, version} from 'react'
import { Link } from 'react-router-dom'
import BoyImg from '../img/boy.png'
import Verified from '../img/verified.png';
import "../signup/signup.css"
import {UserContext} from '../App'


const Profile = () => {
    const [mypics,setPics] = useState([])
    const {state, dispatch} = useContext(UserContext)
    // console.log(state)
    useEffect(() => {
        fetch('/mypost', {
            headers: {
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
        }).then(res => res.json())
            .then(result => {
                setPics(result.mypost)
                // console.log(result.mypost)
        })
    }, [])
    // console.log(mypics)
    return (
        <>       <div className="update-profile-btn">
                    <Link to="/createpost"> <button className="signup-btn" >Update Profile</button></Link>
            
                </div>
            {
                mypics.map(item => {
                     console.log(item.photo)
                     console.log(item.postedBy.name)
                     console.log(item.title)
                    return (
                        <>
                        
                            {/* For spacing */}
              {/* For spacing */} 
            <div className="mainpost">
                <div className="post">
	                
                            <div className="user_name">
                                <h3>{item.postedBy.name} <img src={Verified}></img></h3>    
                                <h3> </h3>
                            </div>
                
                        <img src={item?.photo}  onContextMenu={(e) => { e.preventDefault();}} className="user-showing-pic" />
                
                </div>

            
                    
            </div>
                                <div className="user-captions">
                                    <div className="user-captions-1">
                                <p className="user-captions-2">{item.title} </p>

                                    </div>
                                </div>
                                    
                        </>
                    )
                })
            }
        </>
    )
}

export default Profile;