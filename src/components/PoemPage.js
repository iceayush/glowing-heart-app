import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PoemPage.css'; // Add your own CSS for the poem page

export default function PoemPage() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/'); // Redirect to the main page
    };

    const handleSurprise = () => {
        navigate('/surprise'); // Redirect to the surprise page
    };

    return (
        <div className="poem-background">
            <div className="poem-content">
                <p>I don't know why people celebrate Valentine's Day,<br/>
                    But here it goes, from me to you</p>

                <p>I wish for our success, hand in hand, through every stride,<br/>
                    For prosperity and growth, with you always by my side.</p>

                <p>I wish for our joy, boundless, pure, and bright,<br/>
                    For health and laughter, morning through night.</p>

                <p>Even if miles stretch wide, our souls will never part,<br/>
                    I’ll find you in every whisper of my heart.</p>

                <p>I wish you immense happiness, your smile my sweetest vow,<br/>
                    Forever your backbone—then, always, and now.</p>

                <p className="final-line">I love you.</p>
                <div className="buttons-container">
                    <button className="go-back-button" onClick={handleGoBack}>Want to try again?</button>
                    <button className="surprise-button" onClick={handleSurprise}>Surprise</button>
                </div>
            </div>
        </div>
    );
}
