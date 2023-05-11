import kratosadd from './images/kratosadd.png'
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import godofwar from './images/godofwar.jpg'


const PsHome = (props) => {
    const [allGames, setAllGames] = useState([])
    const psGames = allGames.filter((game) =>
    game.gameType ==="Playstation")


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
        <div className='container-4'>
           <div className='intro'>
            <h1 className='title1'>DISCOVER</h1>
            <h2>YOUR NEXT GAME</h2>
            <img className = "kratos-add" src ={kratosadd} alt =''/>
            </div>

            <Link className = 'addgamebtn1' to ={'/createGame/form'}>Add Game</Link>
            <h2 className='choose'>Choose Your Game</h2>

           <div>
           <div className='gowdisplay'>
           <img className = "godofwar" src={godofwar} alt= ''/>
           <p>God Of War</p>
           <p>Price:$60</p>
           </div>
           </div>


            <div className='box'>
                
            {psGames.map((game) => (
            <div className='game-list' key={game._id}>
                <h2>{game.gameTitle}</h2>
                <h2>Price: {game.gamePrice}</h2>
           
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

export default PsHome;
