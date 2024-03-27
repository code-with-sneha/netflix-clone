import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/LoginScreen/LoginScreen.css';

const SlideAccord = () => {
    const [signIn, setSignIn] = useState(false);
  return (
    <div className="accordion-slide bg-dark">
        <h1>Frequently Asked Questions</h1>
            <Accordion defaultActiveKey={0} style={{width: '90%',marginTop: '1%',marginLeft: '5%', backgroundColor: 'black'}}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h1 className='ahs' style={{backgroundColor: 'white', color: 'black'}}>What is Netflix?</h1>
                    </Accordion.Header>
                    <Accordion.Body style={{backgroundColor: ' rgb(62, 61, 61)',color: 'white',textAlign:'left'}}>
                        <p style={{fontSize: '20px',fontWeight:'350'}}>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p> <br />
                        <p style={{fontSize: '20px',fontWeight:'350'}}>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                    <h1 className='ahs' style={{backgroundColor: 'white', color: 'black'}}>How much does Netflix cost?</h1></Accordion.Header>
                    <Accordion.Body style={{backgroundColor: ' rgb(62, 61, 61)',color: 'white',textAlign:'left'}}>
                       <p style={{fontSize: '20px',fontWeight:'350'}}>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <h1 className='ahs' style={{backgroundColor: 'white', color: 'black'}}>Where can I watch?</h1>
                    </Accordion.Header>
                    <Accordion.Body style={{backgroundColor: ' rgb(62, 61, 61)',color: 'white',textAlign:'left'}}>
                        <p style={{fontSize: '20px',fontWeight:'350'}}>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p><br />
                        <p style={{fontSize: '20px',fontWeight:'350'}}>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <h1 className='ahs' style={{backgroundColor: 'white', color: 'black'}}>How do I cancel?</h1></Accordion.Header>
                    <Accordion.Body style={{backgroundColor: ' rgb(62, 61, 61)',color: 'white',textAlign:'left'}}>
                        <p style={{fontSize: '20px',fontWeight:'350'}}>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                    <h1 className='ahs' style={{backgroundColor: 'white', color: 'black'}}>What can I watch on Netflix?</h1></Accordion.Header>
                    <Accordion.Body style={{backgroundColor: ' rgb(62, 61, 61)',color: 'white',textAlign:'left'}}>
                        <p style={{fontSize: '20px',fontWeight:'350'}}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                    <h1 className='ahs' style={{backgroundColor: 'white', color: 'black'}}>Is Netflix good for kids?</h1> </Accordion.Header>
                    <Accordion.Body style={{backgroundColor: ' rgb(62, 61, 61)',color: 'white',textAlign:'left'}}>
                        <p style={{fontSize: '20px',fontWeight:'350'}}>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p><br />
                        <p style={{fontSize: '20px',fontWeight:'350'}}>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>    
            <h3 style={{marginTop: '50px', fontWeight: '400',fontSize: '25px'}}>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen-input">
                <form style={{marginTop: '38px', fontWeight: '400'}}>
                    <input type="email" placeholder='Email Address'/>
                        <button onClick={()=>setSignIn(true)} className='loginScreen-getStarted-2'>Get Started</button>
                </form>
            </div>
    </div> 
  )
}

export default SlideAccord