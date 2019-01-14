import React from 'react';
import './Movie.css';


const MovieContent = (props) => {
    console.log(props);
    return (
        <div className="MovieName">
            <h4>{props.name}</h4>
            <img src={props.img} alt=""/>
            <p><b>Released: </b>{props.released}</p>
            <button onClick={props.modalShow}>About movie...</button>
        </div>

    )
};

export default MovieContent;