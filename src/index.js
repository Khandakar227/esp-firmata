// @ts-check
const { Board, Led } = require('johnny-five');
const { EtherPortClient } = require('etherport-client');

const port = new EtherPortClient({
    host: '192.168.0.110',
    port: 3030
})

const board = new Board({
    port,
})

board.on('ready', () => {
    console.log('Ready!!!');
    //Tell the board to do whatever you want
    const led = new Led(2);
    led.blink(1000);
    //
})
