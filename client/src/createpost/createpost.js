import React,{useState,useEffect, useContext} from 'react'
import "../signup/signup.css"
import {useHistory} from 'react-router-dom'
import { UserContext } from '../App'
import profilpic from '../img/bg.jpg'


const CreatePost = () => {
    const history = useHistory()
    const [mypics,setPics] = useState([])
    const {state, dispatch} = useContext(UserContext)
    const [title,setTitle] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    useEffect(() => {
        if(url){
            fetch("/createpost", {
                method: "post",
                headers: {
                    "Content-Type":"application/json", 
                    "Authorization": "Bearer "+localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    title,
                    pic:url
                })
            }).then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.error){
                    
                    document.getElementById("error1").style.display = "flex"
                    document.getElementById("error").innerHTML = data.error
            } else  {
                history.push('/')    
                
                document.getElementById("error1").style.display = "flex"
                document.getElementById("error1").style.backgroundColor = "rgba(0, 141, 7, 0.603)"
                document.getElementById("error").innerHTML = "Posted"
            }
        }).catch(err => {
            console.log(err);
        })
        }
        
    },[url])

    useEffect(() => {
        fetch('/mypost', {
            headers: {
                "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
        }).then(res => res.json())
        .then(result => {
            setPics(result.mypost)
            // console.log(result.mypost[0].photo)
        })
    }, [])
    // console.log(mypics[0].photo)
    // console.log(mypics)
    
    const PostDetails = () => {
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name","dwyth5t7n")
        fetch("	https://api.cloudinary.com/v1_1/dwyth5t7n/image/upload", {
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data => {
            setUrl(data.url)
            })
            .catch(err => {
            console.log(err);
            })

        
    }
     


    return (
        
            <div className="post-uploading-user">

            <input type="file" id="img-post"  onChange={(e)=>setImage(e.target.files[0])} />
                   
            <br />
            {/* <input type="text" placeholder="Title" id="title-post"
               value={title} onChange={(e)=>setTitle(e.target.value)} /> */}
               <textarea id="title-post" placeholder="Enter your Caption"
               value={title} onChange={(e)=>setTitle(e.target.value)} ></textarea>
               <br />
               <button className="signup-btn" onClick={()=>PostDetails()}>Share</button>
               <br />
               <br />
               <br />
            <button className="signup-btn" onClick={() => {
                localStorage.clear()
                dispatch({type:"CLEAR"})
                history.push('/home')
               }} >Logout</button>
            </div>
    )
    
}



export default CreatePost