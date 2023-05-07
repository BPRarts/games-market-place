import haloadd from './images/haloadd.png';
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


const XboxHome = (props) => {
    const [allGames, setAllGames] = useState([])

    useEffect (() => {
        axios.get('http://localhost:8000/api/allGames')
            .then((res) => {
                console.log(res);
                setAllGames(res.data)
            })
            .catch((err) => {
                console.log(err);
             })
    },[])





    return (
        <div className='container-2'>
            <div className='intro'>
            <h1>DISCOVER</h1>
            <h2>YOUR NEXT GAME</h2>
            <Link to ={'/createGame/form'}>Add Game</Link>
            <img class ="halo-add" src = {haloadd} alt =''/>
            </div>
             

            <h2 className='choose'>Choose Your Game</h2>
            <div>
            {
           allGames.map((game) => (
            <div key={game._id} className ='game-list'>
                <h2>Title: {game.gameTitle}</h2>
                <h2>Price: {game.gamePrice}</h2>
                <h2>Description: {game.gameDescription}</h2>
                <Link to ={`/oneGame/${game._id}`}>Details</Link>
                <br></br>
                <Link to ={`/updateGame/${game._id}`}>Edit</Link>
               
            </div>
        ))
    }
            </div>

        </div>
    );
}

export default XboxHome;
