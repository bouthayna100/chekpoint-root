import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieCard.css';
import {  Link } from "react-router-dom"

const MovieCard = props => {
    const [ movies, setMovies ] = useState( props.list );

    const initialiser = () => {
        document.getElementById( "title" ).value = '';
        document.getElementById( "reset" ).click();
        setMovies( {movies} );
        console.log( "offf", movies );
    }
    return <>
        

            <div className="movie-card">
                <div className="movie-header manOfSteel"
                    style={{
                        padding: " 0",
                        margin: "0",
                        height: "367px",
                        width: "100 %",
                        display: "block",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        backgroundImage: "url(" + props.url  + ")",
                        backgroundSize: "cover"
                    }}
                >
                    <div className="header-icon-container">
                        <a >
                            <i className="material-icons header-icon"></i>
                        </a>
                    </div>
                </div>
                <div className="movie-content">
                    <div className="movie-content-header">
                        <a href="">
                            <h3 className="movie-title">  {props.title} </h3>
                    </a>

                    <div className="rates">
                        <StarRatingComponent
                        className={"RatingMovie"}
                        name="rate"
                        starCount={5}
                        value={props.rate}
                        /></div>
                    <br></br>
                    <Link to={`/description/${props.id}`}><button onClick={initialiser} className="btn btn-primary btn-block">Description</button>

                    </Link>

                    </div>
                   
                </div>
        </div>

    </> 

}
export default MovieCard