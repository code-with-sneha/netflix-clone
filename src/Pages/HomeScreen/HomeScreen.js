import React from 'react';
import './HomeScreen.css';
import Nav from '../../components/Nav/Nav'; 
import Banner from '../../components/Banner/Banner';
import Row from '../../components/Row/Row';
import requests  from '../../helpers/requests';
const HomeScreen = () => {
  
  return (
    <div className='homeScreen'>
        {/* nav */}
        <Nav />
        {/* banner */}
        <Banner />
        {/* row */}
        <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} isLarge />
        {/* row */}
        <Row  title="Trending Now" fetchUrl={requests.fetchTrending} />
        {/* row */}
        <Row 
        title="Top Rated" 
        fetchUrl={requests.fetchTopRated} />
        {/* row */}
        <Row 
        title="Action Movies" 
        fetchUrl={requests.fetchActionMovies} />
        {/* row */}
        <Row 
        title="Comedy Movies" 
        fetchUrl={requests.fetchComedyMovies} />
        {/* row */}
        <Row 
        title="Horror Movies" 
        fetchUrl={requests.fetchHorrorMovies} />
        <Row 
        title="Romance Movies" 
        fetchUrl={requests.fetchRomanceMovies} />
        <Row 
        title="Documentaries" 
        fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
