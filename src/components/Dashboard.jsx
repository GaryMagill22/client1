import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';






const Dashboard = () => {
    const [songList, setSongList] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:8000/api/songs')
            .then((res) => {
                console.log(`Here is my Dashboard useEffect in action:`, res.data.results)
                setSongList(res.data.results)
            })
            .catch((err) => {
                console.log(`This is my Dashboard useEffect catch all in action ${err}`)
            })
    }, [])
    // Need dependency array 

    return (
        <div>
            <h1 style={{ margin: "0 auto" }}>Dashboard</h1>
            <button className="btn btn-outline-success"><Link to={"/create"}> Add A Song</Link></button>
            <table className='table' >
                <thead>
                    <tr>
                        <th>Artist</th>
                        <th>Title</th>
                        <th>Rating</th>
                        <th>Top100?</th>
                        <th>Album Cover</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        songList.map((song, i) => {
                            return (
                                <tr key={i}>
                                    <td>{song.artist}</td>
                                    <td>{song.title}</td>
                                    <td>{song.rating}</td>
                                    <td>{song.top100 ? "Yes" : "No"}</td>
                                    <td><img src={song.image} alt="Album Cover" height="100px" /></td>
                                    <td><button className=" btn btn-outline-warning"><Link to={`/details/${song._id}`}>View</Link> </button>  | <button className=" btn btn-outline-primary" >Edit</button>  |  <button className=" btn btn-outline-danger" >Delete</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Dashboard