import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login'


const App = (props) => {    

    return (<BrowserRouter>
    <div className='app-wrapper'>
     <HeaderContainer  />    
    <Navbar  />  
    <div className ='app-wrapper-content'> 
    
    <Routes>    
    <Route path='/profile/' element={<ProfileContainer/>}>
    <Route path=':userId/*' element={<ProfileContainer/>}/>
    </Route> 
    <Route path="/dialogs/*" element = {<DialogsContainer />} />  
    <Route path="/users" element = {<UsersContainer />} />
    <Route path="/login" element={<Login />}/>
    </Routes> 
    </div>
    
    </div>
    </BrowserRouter>
    
  );
 
}




export default App;
