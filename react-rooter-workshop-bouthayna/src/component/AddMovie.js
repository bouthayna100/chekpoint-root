import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component'
import { v4 as uuidv4 } from 'uuid';

const AddMovie = ( { add } ) => {
    const [ movie, setMovie ] = useState( {
        id:"",
        url: "",
        url2:"",
        description: "",
        rate:""
    } );
    const [ show, setShow ] = useState( false );
    const [ rating, setRating ] = useState( 0 );

    const hundleChange = ( e ) => {
        setMovie( { ...movie, [ e.target.name ]: e.target.value } )
        document.getElementById( 'erreurTitle' ).textContent = "";
        document.getElementById( 'erreurDesc' ).textContent = "";
        document.getElementById( 'erreurUrl' ).textContent = "";
        document.getElementById( 'erreurUrl2' ).textContent = "";

        console.log( movie.url2 );

    }
    const onStarClick = ( nextValue, prevValue, name ) => {
        if ( name === "rate1" ) {
            document.getElementById( 'erreurRate' ).textContent = "";
            setRating( nextValue );
            setMovie( { ...movie, [ "rate" ]: nextValue } )
        }
    }
    const handleClose = () => {
        setRating( 0 );
        setShow( false );
    }

    const handleShow = () => {
        setMovie( { ...movie, [ "id" ]: uuidv4() } );
        console.log( movie.id );

        setRating( 0 );
        setShow( true );
    }
    const submit = () => {
        document.getElementById( 'erreurTitle' ).textContent = "";
        document.getElementById( 'erreurDesc' ).textContent = "";
        document.getElementById( 'erreurUrl' ).textContent = "";
        document.getElementById( 'erreurUrl2' ).textContent = "";

        document.getElementById( 'erreurRate' ).textContent = "";
        if ( document.form.title.value === "" ) {
            document.getElementById( 'erreurTitle' ).textContent = "Title should be not empty";
        } 
         else
            if ( document.form.url.value === "" )
                document.getElementById( 'erreurUrl' ).textContent = "Url should be not empty";
     
        else
            if ( document.form.url2.value === "" )
                document.getElementById( 'erreurUrl2' ).textContent = "Url Youtube should be not empty";
            else
                if ( document.form.description.value === "" ) {
                    document.getElementById( 'erreurDesc' ).textContent = "Description should be not empty";
                }
                else if ( rating === 0 ) {
                    document.getElementById( 'erreurRate' ).textContent = "rate  should be not equal 0";
                } else {
                    add( movie )
                    handleClose()
                }
    }
    return (
        <div id="add" >
            <Button variant="primary" onClick={handleShow}>
                Add Movie
                       </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form name="form">
                        <div className="form-group">
                            <div className="input-container">
                                <i className="fa fa-film icon"></i>
                                <input name="title" onChange={hundleChange} type="text" className="form-control" placeholder="Enter Title Movie" required />
                            </div>
                            <p id="erreurTitle" style={{ color: "red" }}></p>
                        </div>
                        <div className="form-group">
                            <div className="input-container">
                                <i className="fa fa-image icon"></i>
                                <input required name="url" onChange={hundleChange} type="text" className="form-control" placeholder="Enter URL Movie" />
                            </div>
                            <p id="erreurUrl" style={{ color: "red" }}></p>

                        </div>
                        <div className="form-group">
                            <div className="input-container">
                                <i className="fa fa-youtube icon"></i>
                                <input required name="url2" onChange={hundleChange} type="text" className="form-control" placeholder="Enter URL Youtube Movie" />
                            </div>
                            <p id="erreurUrl2" style={{ color: "red" }}></p>

                        </div>
                        <div className="form-group">
                            <div className="input-container">
                                <i className="fa fa-edit icon"></i>
                            </div>
                            <textarea required name="description" onChange={hundleChange} className="form-control" rows="4" placeholder="Enter Description Movie"></textarea>
                            <p id="erreurDesc" style={{ color: "red" }}></p>

                        </div>
                        <h6> Rating Selected :{rating} </h6 >
                        <StarRatingComponent
                            name="rate1"
                            className={"RatingMovie"}
                            starCount={5}
                            value={rating}
                            onStarClick={onStarClick.bind( this )}
                        />
                        <p id="erreurRate" style={{ color: "red" }}></p>

                        <button onClick={submit} type="button"
                            className="btn btn-primary btn-block">Save</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default AddMovie