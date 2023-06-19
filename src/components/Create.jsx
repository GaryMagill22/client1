import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';



const Create = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [rating, setRating] = useState(5);
    const [top100, setTop100] = useState(false);
    const [image, setImage] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Destructure the getters so we can call it and use to to grab data we need
        const songObject = { title, artist, rating, top100, image }
        axios.post('http://localhost:8000/api/songs/new', songObject)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.logt('This is our create page catch error:', err)
            })
    }



    return (
        <div>
            <h1> Create Component</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Title</label>
                    <input type="text" className="form-control" name="title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Artist</label>
                    <input type="text" className="form-control" name="artist" onChange={(e) => setArtist(e.target.value)} />
                </div>
                <div>
                    <label>Rating</label>
                    <input type="number" className="form-control" name="rating" onChange={(e) => setRating(e.target.value)} />
                </div>
                <div>
                    <label>Top100?</label>
                    <input type="checkbox" className="form-control" name="top100" onChange={(e) => setTop100(e.target.checked)} />
                </div>
                <div>
                    <label>Album Cover</label>
                    <input type="text" className="form-control" name="image" onChange={(e) => setImage(e.target.value)} />
                </div>
                <div>
                    <button type='submit' className='btn btn-outline-dark'>Add a Song</button>
                </div>
            </form>
        </div>
    )
}

export default Create