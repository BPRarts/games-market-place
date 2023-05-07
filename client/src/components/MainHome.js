import React from 'react';
import img1 from './images/games-advertisment-.png'
import xboximage from './images/xbox.jpg';
import switchimage from './images/switch.png'
import psimage from './images/playstation.jpg'
import {Link} from 'react-router-dom'



const MainHome = () => {
    return (
    <div className='container-1'>
         <div className='intro'>
            <h1>BUY AND SELL</h1>
            <h3>YOUR NEXT GAME!</h3>
            <img class = "img1" src={img1} alt= ''/>
         </div>
            <h2 className='choose'>Choose Your Platform</h2>

            <div class = "platforms">

                  <div>
                    <Link class = "go" to = '/XboxHome'>Go!</Link>
                    <img class = "xbox-image" src = {xboximage}  alt = ''/>
                   </div>

                   <div>
                    <Link class = "go" to = '/SwitchHome'>Go!</Link>
                    <img class = "switch-image" src = {switchimage} alt = ''/>
                  </div>

                  <div>
                    <Link class = "go" to = '/PlaystationHome'>Go!</Link>
                <img class = "ps-image" src = {psimage} alt = '' />
                  </div>
            </div>
                

            
     </div>
    );
}

export default MainHome;
