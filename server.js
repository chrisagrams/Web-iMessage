const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const runApplescript = require('run-applescript');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});