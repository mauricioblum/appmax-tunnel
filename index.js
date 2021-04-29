


const config = {
  username:'root',
  host:sshServer,
  port:22,
  dstHost:destinationServer,
  dstPort:3306,
  localHost:'127.0.0.1',
  privateKey:require(fs).readFileSync('/path/to/key'),
  localPort: 3307
};

const mysql = require('mysql');
const tunnel = require('tunnel-ssh');

const appmaxConnection = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

tunnel(config, function (error, server) {
  appmaxConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  if(error) {
    console.log('error', error);
  }
});