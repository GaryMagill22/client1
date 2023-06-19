import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';



const Details = () => {
    const [song, setSong] = useState('');
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost8:8000/api/songs/${id}`)
            .then((res) => {
                console.log(res.data.results)
                setSong(res.data.results)
            })
            .catch((err) => {
                console.log("This is our details page component get error: ", err)
            })
    }, [id])

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/songs/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <h1> Details</h1>
            <img src={song.image} alt="Album Cover" height="150px" />
            <p>{song.artist}</p>
            <p>Song Title: {song.title}</p>
            <p>Rating: {song.rating}</p>
            <p> {song.top100 ? "Oh yeah!!!" : "No Way"}</p>


            <div>
                <button onClick={handleDelete} className="btn btn-outline-dark">Delete</button>
                <button className="btn btn-outline-dark"><Link to={'/'}>Cancel</Link></button>
            </div>
        </div>
    )
}

export default Details