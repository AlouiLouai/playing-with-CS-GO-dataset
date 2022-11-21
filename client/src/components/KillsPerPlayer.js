import React, { useState, useEffect } from 'react';

import { getKillsPerPlayer } from '../api/api.service'

function KillsPerPlayer() {
    const [kPP, setKPP] = useState([])
    useEffect(() => {
        getKillsPerPlayer()
            .then(x => {
                const splited = x.split(',')
                setKPP(splited)
            })
    }, [])
    return (
        <div className="App">
            <ul class="list-group">
                {kPP.map(i => (
                    <li class="list-group-item" key={i}>{i}</li>
                ))}
            </ul>
        </div>
    );
}

export default KillsPerPlayer;
