const { helper } = require('../helper/helperToCallPython');

// using (req,res) on service layer is important to get the result from child_process ! 
// and it is suitable cause I only need result not request to be passed within the last API layer
module.exports = {

    /**
     * kills per player
     */
    async killsForEachPlayer(req,res) {
        try {
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
        } catch (error) {
            throw new Error('Error encountring while reading from python script')
        }
    },

    /**
     * scoreboard
     */
    async scoreboardOverTime(req,res) {
        try {
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
        } catch (error) {
            throw new Error('Error encountring while getting data from python script')
        }
    },

    /**
     * Average rounds length
     */
    async averageRoundsLength(req,res) {
        try {
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
        } catch (error) {
            throw new Error('Error encountred while getting data from python script')
        }
    }
}
