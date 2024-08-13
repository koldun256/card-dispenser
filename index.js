const { SerialPort } = require("serialport");

const port = new SerialPort({ path: "COM1", baudRate: 9600 });

let msg = new Uint8Array([2, 49, 53, 68, 67, 3, 2]);
port.write(msg);
