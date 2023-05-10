import haloadd from './images/haloadd.png';
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


const XboxHome = (props) => {
    const [allGames, setAllGames] = useState([])
    const xboxGames = allGames.filter((game) =>
    game.gameType ==="Xbox")





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
                 <h1 className='title1'>DISCOVER</h1>
                 <h2>YOUR NEXT GAME!</h2>
                 <Link to ={'/createGame/form'}>Add Game</Link>
                 <img className ="halo-add" src = {haloadd} alt =''/>
            </div>
                <h2 className='choose'>Choose Your Game</h2>

            <div className='box'>
                {xboxGames.map((game) => (
                   <div className='game-list' key={game._id}>

                   


                        <h2>{game.gameTitle}</h2>
                        <h2>Price: {game.gamePrice}</h2> 
               
    
                        <Link className='links' to ={`/oneGame/${game._id}`}>Details</Link>
                        <br></br>
                        <Link className='links' to ={`/updateGame/${game._id}`}>Edit</Link>
                     </div>
                         ))
                         }
            </div>

        </div>
    );
}

export default XboxHome;
