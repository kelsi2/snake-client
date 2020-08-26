const net = require('net');
//const conn = require("./client.js");
/*
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const handleUserInput = function(data) {

  switch (data) {
    case "w":
      conn.write("Move: up");
      break;
    case "a":
      conn.write("Move: left");
      break;
    case "s":
      conn.write("Move: down");
      break;
    case "d":
      conn.write("Move: right");
      break;
    case "\u0003":
      process.exit();
  }
};

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();

module.exports = {setupInput};