import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'


// useEffect(() => {
//   const token = localStorage.getItem("token");
//   if(token){
//     apiAuth.defaults.headers.common["Authorization"] = token
//     isAuth(dispatch)
//   }

// })

function Routers() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Routers