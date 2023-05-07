import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

const OneGame = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [oneGame, setOneGame] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneGame/${id}`)
            .then((res) => {
                console.log(res);
                setOneGame(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])



    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteGame/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }





    return (
     <div>
         <div className='deletenav'>
            <h3>Details About: {(oneGame.gameTitle)}</h3>
            
           
         </div>
        <div className='buy'>
            <h2>{oneGame.gameTitle}</h2>
            <h2>{oneGame.gamePrice}</h2>
            <h2>{oneGame.gameDescription}</h2>
            <h2>{oneGame.gameType}</h2>
            <button className='delete' onClick={() => deleteHandler(oneGame._id)}>BUY</button>
            
           
            
           

        </div>
    </div>
    );
}

export default OneGame;
