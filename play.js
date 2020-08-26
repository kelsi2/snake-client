const {connect} = require("./client");
const {setupInput} = require("./input");

console.log('Connecting ...');
conn = connect();

setupInput(conn);