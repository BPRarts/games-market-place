import React from 'react';
import img1 from './images/games-advertisment-.png'
import xboximage from './images/xbox.jpg';
import switchimage from './images/switch.png'
import psimage from './images/playstation.jpg'



const MainHome = () => {
    return (
    <div>
         <div>
            <h1>BUY AND SELL</h1>
            <h3>YOUR NEXT GAME</h3>
            <img class = "img1" src={img1} alt= ''/>
         </div>
                <h2>Choose Your Platform</h2>
            <div class = "platforms">
                <img class = "xbox-image" src = {xboximage} alt = ''/>
                <img class = "switch-image" src = {switchimage} alt = ''/>
                <img class = "ps-image" src = {psimage} alt = ''/>
            </div>
                

            
     </div>
    );
}

export default MainHome;
