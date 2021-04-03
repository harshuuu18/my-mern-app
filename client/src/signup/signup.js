import { getQueriesForElement } from '@testing-library/react';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import BoyImg from '../img/boy.png'
import "../signup/signup.css"

const SignUp = () => {
    
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [gender,setGender] = useState("")
    // const [female,setFemale] = useState("")
    const PostData = () => {
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email,
                gender
                
            })
        }).then(res => res.json())
        .then(data => {
            if(data.error){

                document.getElementById("error1").style.display = "flex"
                document.getElementById("error").innerHTML = data.error
            } else if(data.message) {
                document.getElementById("error1").style.display = "flex"
                document.getElementById("error1").style.backgroundColor = "rgba(0, 141, 7, 0.603)"
                document.getElementById("error").innerHTML = data.message
                history.push('/signin')    
            }
        }).catch(err => {
            console.log(err);
        })
    }
    
    //  const Male = ()=> {
    //   let male = document.getElementById("male");
    //   let female = document.getElementById("female");
    //   let ImgChange = document.querySelector("#change-extra");
    //   male.style.backgroundColor = "skyblue";
    //   female.style.backgroundColor = "white";
      
    // }
    // const Female = ()=> {
    //   let male = document.getElementById("male");
    //   let female = document.getElementById("female");
    //   let ImgChange = document.querySelector("#change-extra");
    //   male.style.backgroundColor = "white";
    //   female.style.backgroundColor = "pink";
      
    // }

    return (
        <>
        {/* For spacing */}
        <br /><br /><br /><br /><br />
        {/* For spacing */}
        <footer>
            {/* Signup Page for users */}
            <div className="signup-main">
                <h2>Join Us</h2>
                <br /><br /><br />
                    <div id="error1">
                        <p id="error"></p>
                    </div>
                
                    <input type="text" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)} />
                    <br />
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <br />
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <br />
                    <div  className="gender-select">
                    <p>Male</p> 
                    <input type="radio" value="male" onChange={(e)=>setGender(e.target.value)} className="male-female" name="gender" />
                    <p>Female</p> 
                        
                    <input type="radio" value="female" onChange={(e)=>setGender(e.target.value)} className="male-female"  name="gender" />
                    </div>
                    <br />
                    <p className="already-have-an-acc">Already Have an Account?   <Link to="/signin">Login</Link></p>
                    <br />
                    
                    <button className="signup-btn" onClick={()=>PostData()}>Signup</button>
                
            </div>
            {/* Signup Page for users */}
            

        </footer>
        </>

    )
}


export default SignUp;