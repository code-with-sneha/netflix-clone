import React, { useState } from 'react';
import './LoginScreen.css';
import SignInScreen from '../SignInScreen/SignInScreen';
import SlideAccord from '../../components/SlideAccord';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
        <div className="loginScreen-background">
            <img className="loginScreen-logo" 
            src='https://th.bing.com/th/id/R.edd4b97d181fc99f2217dc7a8e0c8ff3?rik=irAt0a1F26vnIQ&riu=http%3a%2f%2fwww.laltrapagina.it%2fmag%2fwp-content%2fuploads%2f2015%2f06%2fNetflix_Logo.png&ehk=NrZSUXfTJawfdv9h5Axu3hnN3WYrMM0GuYAyhEkaNjU%3d&risl=&pid=ImgRaw&r=0' alt='logo'/>
            <button className="loginScreen-button" onClick={()=>setSignIn(true)}>Sign In</button>

            <div className="loginScreen-gradient" />
        </div>
        <div className="loginScreen-body">
            {
                signIn ? (
                    <SignInScreen />
                ) : (
                    <>
                        <div className="first-slide">
                            <h1>Unlimited movies, TV shows and more</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="loginScreen-input">
                                <form>
                                    <input type="email" placeholder='Email Address'/>
                                    <button onClick={()=>setSignIn(true)} className='loginScreen-getStarted'>Get Started</button>
                                </form>
                            </div>
                        </div>
                        <hr className='st-hr' />
                        <div className="second-slide">
                            <div className="left">
                                <h1>Enjoy on your TV</h1>
                                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast,<br /> Apple TV, Blu-ray players and more.</p>
                            </div>
                            <div className="right">
                                <img src="images/feature-1.png" alt="1" style={{height: '50%', width: '50%'}} />
                            </div>
                        </div>
                        <hr className='nd-hr'/>
                        <div className="third-slide">
                            <div className="left">
                                <img src="images/feature-2.png" alt="2" style={{height: '50%', width: '45%'}} />
                            </div>
                            <div className="right">
                                <h1>Download your <br/> shows to watch <br /> offline</h1><br />
                                <p>Save your favourites easily and always have <br /> something to watch.</p>
                            </div>
                        </div>
                        <hr className='nd-hr'/>
                        <div className="fourth-slide">
                            <div className="left">
                                <h1>Watch everywhere</h1>
                                <p>Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</p>
                            </div>
                            <div className="right">
                                <img src="images/feature-3.png" alt="3" style={{height: '50%', width: '50%'}} />
                            </div>
                        </div>
                        <hr className='nd-hr'/>
                        <div className="fifth-slide">
                            <div className="left">
                                <img src="images/feature-4.png" alt="2" style={{height: '50%', width: '45%'}} />
                            </div>
                            <div className="right">
                                <h1>Create profiles for <br /> kids</h1>
                                <p>Send children on adventures with their favourite <br /> characters in a space made just for them—free with <br /> your membership.</p>
                            </div>
                        </div>
                        <hr className='nd-hr'/>
                       <SlideAccord />
                       <hr className='rd-hr'/>
                        <div className="footer">
                            <p>Questions? Call 000-800-100-8343</p>
                            <ul className='col-md-3'>
                            <Link to = 'https://help.netflix.com/en/node/412'><li>FAQ</li></Link>
                            <Link to = 'https://ir.netflix.net/ir-overview/profile/default.aspx'><li>Investor Relations</li></Link>
                            <Link to = 'https://help.netflix.com/legal/privacy'><li>Privacy</li></Link>
                            <Link to = 'https://fast.com/'><li>Speed Test</li></Link>
                            <Dropdown style={{ display: 'block',width: 350,padding: 20 }}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown'>
                                <img src="https://th.bing.com/th/id/OIP.25qyP6enYm2x1oQUKvcwhwHaHa?w=512&h=512&rs=1&pid=ImgDetMain" /> English
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">हिन्दी</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <p>Netflix India</p>
                            </ul>
                            <ul className='col-md-3'>
                            <Link to = 'https://help.netflix.com/en/'><li>Help Centre</li></Link>
                            <Link to = 'https://jobs.netflix.com/'><li>Jobs</li></Link>
                            <Link to = 'https://www.netflix.com/in/'><li>Cookie Preferences</li></Link>
                            <Link to = 'https://help.netflix.com/legal/notices'><li>Legal Notices</li></Link>
                            </ul>
                            <ul className='col-md-3'>
                            <Link to = 'https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount'><li>Account</li></Link>
                            <Link to = 'https://devices.netflix.com/en/'><li>Ways to Watch</li></Link>
                            <Link to = 'https://help.netflix.com/legal/corpinfo'><li>Corporate Information</li></Link>
                            <Link to = 'https://www.netflix.com/in/browse/genre/839338'><li>Only on Netflix</li></Link>
                            </ul>
                            <ul className='col-md-3'>
                                 <Link to = 'https://media.netflix.com/en/'><li>Media Centre</li></Link>
                                 <Link to = 'https://help.netflix.com/legal/termsofuse'><li>Terms of Use</li></Link>
                                 <Link to = 'https://help.netflix.com/en/contactus'><li>Contact Us</li></Link>
                            </ul>
                        </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default LoginScreen