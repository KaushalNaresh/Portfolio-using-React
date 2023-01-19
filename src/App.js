import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else{
        dispatch(logout());
      }
    });

  }, [dispatch])

  return (
    <div className="App">
      <Router>
        { !user ? (
              <LoginScreen/>
            ) : (
              <Routes>
                {/* <Route path = "/profile" element = { <ProfileScreen/>}/> */}
                <Route exact path="/" element = {<HomeScreen />}/>
                <Route exact path="/profile" element = {<ProfileScreen />}/>
              </Routes>
            )
        }
      </Router>
    </div>
  );
}

export default App;
