const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: KJP');

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500);
    // setInterval(() => {
    //   conn.write("Move: down");
    // }, 50);
    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 100);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 150);
    // setInterval(() => {
    //   conn.write("Move: right");
    // }, 200);

  });

  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

module.exports = {connect};