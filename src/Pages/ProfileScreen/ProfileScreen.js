import React from 'react';
import './ProfileScreen.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/UserSlice';
import Nav from '../../components/Nav/Nav';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  const logout = () =>{
    signOut(auth)
  }
  return (
    <div className='profileScreen'>
      <Nav />
      <div className="profileScreen-body">
        <h1>Edit Profile</h1>
        <div className="profileScreen-info">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="avatar" />
          <div className="profileScreen-details">
            <h2>{user.email}</h2>
            <div className="profileScreen-plans">
              <h3>Plans</h3>
              {/* plans */}
              <button className='profile-screen-signout' onClick={logout}>Sign Out</button>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen