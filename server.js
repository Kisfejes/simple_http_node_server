const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
//Lets define a port we want to listen to
const PORT=8080;

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, './public/index.html'));
});


//Create a server
var server = http.createServer(app);

//Lets start our server
server.listen(PORT, () => {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
