import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../../helpers/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const Row = ({title,fetchUrl,isLarge=false}) => {
  const [movies,setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState('');

  const base_url = "https://image.tmdb.org/t/p/original/";


  useEffect(()=>{
    const fetchData = async()=>{
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      //console.log(request);

      return request;
    }
    fetchData();
  },[fetchUrl]);
  //console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }
  const handleClick =(movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer( movie?.name || "")
      .then(url => {
        const urlParams = new  URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get("v"));
      })
      .catch(error=>console.log(error));
    }
  }
  
  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map(
          (movie) =>
          ((isLarge && movie.poster_path) ||
          (!isLarge && movie.backdrop_path)) && (
            <img key={movie.id} 
            onClick={()=> handleClick(movie)}
            className={`row-poster ${isLarge && 'row-posterLarge'}`} 
            src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name} />
          ))}
          <div>
           {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
      </div>
    </div>
  )
}

export default Row