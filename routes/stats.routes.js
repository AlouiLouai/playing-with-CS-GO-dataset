const express = require('express')
const router = express.Router()
const { killsForEachPlayer, scoreboardOverTime, averageRoundsLength } = require('../services/stats.service')

router.get('/playerKills',(req,res)=>{
    killsForEachPlayer(req,res)
})

//signup
router.get('/scoreboard',(req,res)=>{
   scoreboardOverTime(req,res)
})

//signin
router.get('/averageRoundLength',(req,res)=>{
    averageRoundsLength(req,res)
})

module.exports = router