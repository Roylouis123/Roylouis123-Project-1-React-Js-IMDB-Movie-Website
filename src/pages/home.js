import React, { useEffect, useState } from 'react'
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Upcoming from '../pages/upcoming'
import Toprated from '../pages/top_rated'
import Popular from '../pages/popular'

const Home = ({movies}) => {
    const [popularmovies, setpopularmovies]= useState([])
    const [name, setName] = useState('');
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=968886baf11f200de927a22c180eba55&language=en-US")
        .then(res => res.json())
        .then(data => setpopularmovies(data.results))
        .catch(error => console.log('erroer'))
    }, [movies])
    
  return (
    <div>
        <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={.03}
        infiniteLoop={true}
        showStatus={false}
        >
            {
                popularmovies.map(movie=> (
                    <div>
                        <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                    </div>
                    <div className="posterImage__overlay">
                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                     <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                     </div>
                     <input value={name} onChange={setName}/>
                    </div>
                     
                ))
                }

        </Carousel>
        <Popular />
        <Upcoming />
        <Toprated />
        
    </div>
  )
}

export default Home