import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    
    const [show, setShow] = useState(false);

    const transitionNavbar = ()=>{
        if(window.scrollY>100){
            setShow(true)
        }else{
            setShow(false);
        }
    };
    useEffect(()=>{
        window.addEventListener("scroll", transitionNavbar);
        return ()=>window.removeEventListener("scroll",transitionNavbar);
    },[])
    // console.log(show);
  return (
   <nav className={`nav ${show && 'nav-black'}`}>
    <div className="nav-contents">
        <Link to='/'>
        <img src="https://www.commzoom.com/wp-content/uploads/2016/06/Netflix_2014_logo.svg_-1024x276.png" alt="logo" className='nav-logo' />
        </Link>
        <Link to='/profile'>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="avatar" className='nav-avatar' />
        </Link>
    </div>
   </nav>
  )
}

export default Nav