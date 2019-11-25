import React from 'react'
import hImg from '../Images/hImg.jpg';

 function Home() {


    return (
        <div>
            <h1 className="homeHeading">Welcome to Invisalign</h1>
            <img className="homeImage" src = {hImg} />
            
        </div>
    );
}

export default Home;