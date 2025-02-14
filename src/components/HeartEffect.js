import React from 'react';
import './HeartEffect.css';
import { useNavigate } from 'react-router-dom';

export default function HeartEffect() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/poem'); // Redirect to the poem page
    };

    return (
        <div className="heart-background">
            <div className="heart" onClick={handleClick}>
                <div className="heart-wrapper">
                    <div className="heart-button">
                        <p>Press Me Gently
                        <br/> Pleasure Lies There
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
