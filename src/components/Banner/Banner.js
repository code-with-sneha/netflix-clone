import React, { useEffect, useState } from 'react';
import axios from '../../helpers/axios';
import requests from '../../helpers/requests';
import './Banner.css'
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const request = await axios.get(requests.fetchNetflixOriginals);
      //console.log(request);
      
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
      );
        return request;
    }
    fetchData();
  },[]);
  console.log(movie);

  function truncate(string, n){
    return string?.length > n ? string.substr(0,n-1)+'...' : string;
  }

  return (
    <header className='banner' style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
    backgroundSize: 'cover',
    backgroundPosition: "center",
    }}> 
      <div className="banner-contents">
        <h1 className='banner-title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My Play</button>
        </div>
        <div className="banner-description">
            {truncate(movie?.overview,150)}
        </div>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  )
}

export default Banner