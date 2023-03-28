//get path all system (macos, window, ..)
const path = require("path");

module.exports = path.dirname(require.main.filename);
