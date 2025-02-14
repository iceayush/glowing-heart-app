import React from 'react';
import './App.css';
import HeartEffect from './components/HeartEffect';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PoemPage from './components/PoemPage'; // Import PoemPage
import SurprisePage from './components/SurprisePage'; // Import SurprisePage

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/poem" element={<PoemPage />} />
                    <Route path="/surprise" element={<SurprisePage />} />
                    <Route path="/" element={<HeartEffect />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
