const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')
const { helper } = require('./helper/helperToCallPython')

const app = express()

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())

const port = 2000

// kills per player
app.get('/playerKills', (req, res) => {
    // spawn new child process to call the python script
    let dataToSend
    let child = helper('./python_scripts/killPerPlayer.py')
    // collect data from script
    child.stdout.on('data', async function (data) {
        dataToSend = await data.toString();
    });
    // throw errors
    child.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
    });
    // in close event we are sure that stream from child process is closed
    child.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend)
    })
})

// score board over match
app.get('/scoreboard', (req, res) => {
    let dataToSend
    let child = helper('./python_scripts/scoreboard.py')
    // collect data from script
    child.stdout.on('data', async function (data) {
        dataToSend = await data.toString();
    });
    // throw errors
    child.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
    });
    // in close event we are sure that stream from child process is closed
    child.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend)
    })
})

// average round length
app.get('/averageRoundLength', (req, res) => {
    let dataToSend
    let child = helper('./python_scripts/averageRoundLength.py')
    // collect data from script
    child.stdout.on('data', async function (data) {
        dataToSend = await data.toString();
    });
    // throw errors
    child.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
    });
    // in close event we are sure that stream from child process is closed
    child.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend)
    })
})

app.listen(port, () => console.log(`CS:GO app listening on port 
${port}!`))