const { averageRoundsLength, killsForEachPlayer, scoreboardOverTime } = require('../services/stats.service');
describe('Testing endpoints services', () => {
    it('should return defined killers per player', async () => {
        expect(killsForEachPlayer).toBeDefined()
    })
    it('should return defined scorebord', async () => {
        expect(scoreboardOverTime).toBeDefined()
    })
    it('should return defined average round length', async () => {
        expect(averageRoundsLength).toBeDefined()
    })
})
