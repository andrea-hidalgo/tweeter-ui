import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './pages/App';
import About from './pages/About';

function Main() {

    return (
        <>
        <div className='page-container'>      
            <div className='image-container'>
                <img src='/public/images/tweeter-intro-gif.gif'></img>
            </div>
            <div className='enter-container>'>
                <img src='/public/images/enter.gif'></img>
            </div>
        </div>  
        </>

    )
}

export default Main;