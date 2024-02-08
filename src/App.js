import React, { useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import ProfileScreen from './Pages/ProfileScreen/ProfileScreen';
import LoginScreen from './Pages/LoginScreen/LoginScreen';
import { login, logout, selectUser } from './features/UserSlice';
import {useDispatch, useSelector} from  'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const App = () => {
  const user = useSelector(selectUser);

  //console.log(user);

  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(userAuth)=>{
      if (userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }
      else{
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[]);

  //console.log(user);
  // const user = null;
  // {
  //   name: 'jack',
  //   email: 'jack@gmail.com',
  //   pass: "jack",
  // };
  return (
    <div className='app'>
      <Router>
        {
          !user ? 
          //loginscreen
          // <h1>Login</h1>
          <LoginScreen />
          :
          <Routes>
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        }
      </Router>
    </div>
  )
}

export default App