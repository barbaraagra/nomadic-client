import React from 'react';
import '../App.css';
import { Button } from './Button';
import './SectionOne.css';
import VideoBg from '../assets/videos/videobg.mp4';

function SectionOne() {
    return (
        <div className='section-container'>
            <h1>CAN WORK FROM ANYWHERE?</h1>
            <h3>FIND YOUR NEX DESTINATION</h3>
            <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>SEE MORE</Button>
            <video src={VideoBg} autoPlay loop muted />
        </div>
    )
}

export default SectionOne