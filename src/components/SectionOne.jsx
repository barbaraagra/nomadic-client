import React from 'react';
import '../App.css';
import { Button } from './Button';
import './SectionOne.css';
import VideoBg from '../assets/videos/bgvideoone.mp4';

function SectionOne() {
    return (
        <div className='section-container'>
            <video src={VideoBg} autoPlay loop muted />
            <h1>CAN WORK FROM EVERYWHERE?</h1>
            <h3>FIND YOUR NEX DESTINATION</h3>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>SEE MORE</Button>

            </div>
        </div>
    )
}

export default SectionOne