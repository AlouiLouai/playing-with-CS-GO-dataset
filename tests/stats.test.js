const { expect } = require('chai');
const { averageRoundsLength, killsForEachPlayer, scoreboardOverTime } = require('../services/stats.service');

describe('Stats test', () => {
    it('Checking the return data to be float since we have average', () => {
        expect(averageRoundsLength).to.be.true;
    });

    it('kills per player should return string', () => {
        expect(killsForEachPlayer).to.be.an('string');
    });

    it('scoreboard over time should return string', () => {
        expect(scoreboardOverTime).to.be.an('String');
    })
});