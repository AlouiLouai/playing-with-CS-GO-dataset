const {spawn} = require('child_process')

const helper = (pathToScript) => spawn('C:/Windows/py', [pathToScript]);

module.exports = {
    helper
}
