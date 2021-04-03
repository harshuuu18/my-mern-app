import React,{useEffect,createContext,useReducer,useContext} from 'react'
import NavBar from './homepage/navbar'
import InfoBar from './homepage/infoBar'
import Banner from './homepage/banner'
import Login from './login/Login.js'
import SignUp from './signup/signup'
import AfterLogin from './afterlogin/post'
import BottomNav from './afterlogin/bottomNav'
import AllDms from './afterlogin/dm'
import CreatePost from './createpost/createpost'
import Profile from './afterlogin/profile'
import "../src/App.css"
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import {reducer,initialState} from './Reducers/userReduser'

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({type:"USER",payload:user})
      
    } else {
      history.push('/home')
    }
    
  },[])
  return (
    <Switch>
    <Route exact path="/" >
        <AfterLogin />

        <BottomNav />
        <br />
        <br />
        <br />
        <br />

      </Route>

      <Route path="/signin" >
        <Login />
      </Route>

      <Route path="/signup" >
        <SignUp />
      </Route>

      <Route path="/home">
        <Banner />
        <InfoBar />
      </Route>

      <Route path="/dms">
        <br />
        <br />
        <br />
        <br />
        <AllDms />
        <AllDms />
        <AllDms />
        <BottomNav />
        <br />
        <br />
        <br />
        <br />
      </Route>

      <Route path="/createpost">
        <br />
        <br />
        <br />
        <br />
        <CreatePost />
        <BottomNav />
        <br />
        <br />
        <br />
        <br />
      </Route>

      <Route path="/profile">
        <br />
        <br />
        <br />
        <br />
        <Profile />
        <BottomNav />
        <br />
        <br />
        <br />
        <br />
      </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
