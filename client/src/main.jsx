import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,createBrowserRouter,RouterProvider, createRoutesFromElements } from "react-router-dom"
import store from './store.js'
import {Provider} from 'react-redux'
import HomeScreen from './screens/homeScreen.jsx'
import LoginScreen from './screens/loginScreens.jsx'
import SignupScreen from './screens/signupScreen.jsx'
import UserProfile from './screens/Prodile.jsx'
import PrivetRoute from './components/PrivetRoute.jsx'
import EditProdile from './screens/EditProfile.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App />}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/signup' element={<SignupScreen/>}/>

      <Route path='' element={<PrivetRoute/>}>
      <Route path='/profile' element={<UserProfile/>}/>
      <Route path='/editprofile' element={<EditProdile/>}/>

      </Route>
    
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
)
