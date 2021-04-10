import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieCard.css';

const Description = ( { match, list, history } ) => {
    var movie = list.find( p => p.id === match.params.id );

    return <div className="container">
        <div className="movie-card" style={{maxWidth:"500px"}}>
            <div className="movie-header">
        

                <iframe  src={movie.url2}
                    style={{
                        padding: " 0",
                        margin: "0",
                        height: "367px",
    width: "-webkit-fill-available",
                        display: "block",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                               backgroundSize: "cover"
                    }}
                
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

                </iframe>
              
            </div>
            <div className="movie-content" 
                >
                <div className="movie-content-header">
                    <a href="#">
                        <h3 className="movie-title">  {movie.title} </h3>
                    </a>
                </div>
                <div className="movie-info">
                    <div className="info-section">
                    {movie.description} </div>
                </div>
            </div>
            <div >

            <button className="btn btn-primary btn-block" onClick={() => history.push( '/' )}>       Back
            </button>
            </div>

        </div>
    </div>

}
export default Description