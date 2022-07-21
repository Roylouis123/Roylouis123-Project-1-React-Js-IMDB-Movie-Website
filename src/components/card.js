import React from "react"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    return <>
    {

        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt=""/>
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards