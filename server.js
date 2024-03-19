const http = require('http');
const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3000
const myserver = http.createServer(app);
myserver.listen(port, () =>{
    console.log('listening on port '+port);
})