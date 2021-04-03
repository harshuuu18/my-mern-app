import { getQueriesForElement } from '@testing-library/react';
import React, { useState,useContext } from 'react'
import { Link,useHistory } from 'react-router-dom'
import {UserContext} from '../App'
import "../signup/signup.css"

const Login = () => {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = () => {
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
            .then(data => {
            console.log(data);
            if(data.error){

                document.getElementById("error1").style.display = "flex"
                document.getElementById("error").innerHTML = data.error
            } else  {
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})
                document.getElementById("error1").style.display = "flex"
                document.getElementById("error1").style.backgroundColor = "rgba(0, 141, 7, 0.603)"
                document.getElementById("error").innerHTML = "Logged in"
                history.push('/')    
            }
        }).catch(err => {
            console.log(err);
        })
    }
    
    
    return (

        <>
        {/* For spacing */}
        <br /><br /><br /><br /><br />
        {/* For spacing */}
        <footer>
            {/* Signup Page for users */}
            <div className="signup-main">
                <h2>Login</h2>
                <br /><br /><br />
                    <div id="error1">
                    <p id="error"></p>
                    </div>
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <br />
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <br />
                    <p className="already-have-an-acc">Don't have an Account?   <Link to="/signup">Signup</Link></p>
                    <br />
                    <button className="signup-btn" onClick={()=>PostData()}>Login</button>
                
            </div>
            {/* Signup Page for users */}

        </footer>
        </>

    )
}

export default Login;