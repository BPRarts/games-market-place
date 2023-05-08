import linkadd from './images/linkadd.png'
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const SwitchHome = (props) => {
    const [allGames, setAllGames] = useState([])
    const switchGames = allGames.filter((game) =>
    game.gameType ==="Switch")
    


    




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
    <div className='container-3'>
        <div className='intro'>
            <h1 className='Discover'>DISCOVER</h1>
            <h2>YOUR NEXT GAME</h2>
            <Link to ={'/createGame/form'}>Add Game</Link>
            <img className = "link-add" src ={linkadd} alt = ''/>
        </div>

        <h2 className='choose'>Choose Your Game</h2>


        <div className='box'>   
            {switchGames.map((game) => (
                <div className='game-list' key={game._id}>
                <h2>{game.gameTitle}</h2>
                <h2>Price:{game.gamePrice}</h2>
               
    
               <Link className='links' to ={`/oneGame/${game._id}`}>Details</Link>
               <br></br>
               <Link className='links' to ={`/updateGame/${game._id}`}>Edit</Link>
               </div>
        ))}
    </div>
        


        
    </div>
    );
}

export default SwitchHome;




