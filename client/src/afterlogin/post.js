import React,{useState,useEffect,useContext} from 'react'
import Like from '../img/like.png'
import Dm from '../img/msg2.png'
import Delete from '../img/deleteit.png'
import Bg from '../img/bg.jpg'
import Verified from '../img/verified.png'
import { UserContext } from '../App'
import Liked from '../img/liked.png'

const AfterLogin = () => {
    const [data, setData] = useState([])
    const {state, dispatch} = useContext(UserContext)
    useEffect( async () => {
        await fetch('/allpost', {
            headers: {
                "Content-Type":"application/json",
               "Authorization":"Bearer "+ localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
            .then(result => {
           setData(result.posts)
           console.log(result.posts)
       })
    },[])


    const likePost = (id) => {
        fetch('/like', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
            .then(result => {
            const newData = data.map(item => {
                    if (item._id == result._id) {
                     return result
                    } else {
                        return item
                 }
                })
                setData(newData)
            }).catch(err => {
            console.log(err)
            })
        
    }

    const unlikePost = (id) => {
        fetch('/unlike', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
            .then(result => {
                const newData = data.map(item => {
                    if (item._id == result._id) {
                     return result
                    } else {
                        return item
                 }
                })
                setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
             <>
               
        {/* // For Single post */}
            
                {
                    data.map(item => {
                        
                        console.log(item)
                        return (
                            <>
                            {/* For spacing */}
        <br /><br /><br /><br /><br />
        {/* For spacing */} 
            <div className="mainpost">
                <div className="post">
	                
                            <div className="user_name">
                                <h3>{ item.postedBy?.name} <img src={Verified}></img></h3>    
                                <h3>{item.likes.length} </h3>
                            </div>
                
                        <img src={item.photo}  onContextMenu={(e) => { e.preventDefault();}} className="user-showing-pic" />
                
                </div>

            
                    <div className="action_center" id="action2">
                            {item.likes.includes(state._id)
                            ? <img  className="action-img" src={Liked} onClick={()=>{likePost(item._id)}} id="action-img1" /> 
                            :  <img className="action-img" src={Like} onClick={()=>{unlikePost(item._id)}} id="action-img1" />
                            }
                        
                        <img className="action-img" src={Dm} id="action-img2" />
                        <img className="action-img" src={Delete}  id="action-img3" />

                    </div>

            </div>
                                <div className="user-captions">
                                    <div className="user-captions-1">
                                <p className="user-captions-2">{item.title}</p>

                                    </div>
                                </div>
                                    
                            </>    
                        )
                    })
                 }
            

        </>

    )
}

export default AfterLogin;

