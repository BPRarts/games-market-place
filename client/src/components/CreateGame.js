import React,{useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';

const CreateGame = () => {
    const [game,setGame] = useState({
        gameTitle:'',
        gamePrice:'',
        gameDescription:''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        if(e.target.name ==='explicit'){
            setGame({...game,explicit: !game.explicit})
    
        }else{
            setGame({...game,[e.target.name]: e.target.value})
        }
    
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newGame',game)
             .then((res) => {
                console.log(res);
             })
             .catch((err) =>{
                console.log(err);
                setErrors(err.response.data.errors)
             })
    }

    return (
        <div>
             <div className='homenav'>
            <h2 className=''>Place a game to sell?</h2>
           
        </div>
        <div className='form'> 
            <form  onSubmit={submitHandler}>
                <div>
                    <label>Game Title:</label>
                    <input type="text" name='gameTitle' onChange={changeHandler} value={game.gameTitle}/>
                    {
                        errors.gameTitle?
                        <p className='text-danger'>{errors.gameTitle.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name='gamePrice' onChange={changeHandler} value={game.gamePrice}/>
                    {
                        errors.gamePrice?
                        <p className='text-danger'>{errors.gamePrice.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name='gameDescription' onChange={changeHandler} value={game.gameDescription}/>
                    {
                        errors.gameDescription?
                        <p className='text-danger'>{errors.gameDescription.message}</p>:
                        null
                
                    }
                    
                    <br></br>
                    <button className='addpet'>Add Game</button>
            </div>
            </form>



        </div>
        </div>
    );
}

export default CreateGame;
