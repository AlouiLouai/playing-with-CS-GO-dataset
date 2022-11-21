import React, { useState, useEffect } from 'react';

import { getScoreBoard } from '../api/api.service'

function Scoreboard() {
    const [scoreboard, setScoreboard] = useState([])
    useEffect(() => {
        getScoreBoard()
            .then(x => {
                const splited = x.split(',')
                setScoreboard(splited)
            })
    }, [])
    return (
        <div className="App">
            <ul class="list-group">
                {scoreboard.map(i => (
                    <li class="list-group-item" key={i}>{i}</li>
                ))}
            </ul>
        </div>
    );
}

export default Scoreboard;
