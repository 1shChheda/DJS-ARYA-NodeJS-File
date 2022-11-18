const http = require('http')

const express = require(`express`)

const app = express()

const server = http.createServer(app)

const io = require('socket.io')(server, { cors: { origin: "*"} })

app.set('view engine', 'ejs') // setting the value of view engine to ejs

app.get('/home', (req, res) => {
    res.render('home')
})

server.listen(3001, () => {
    console.log(`Server Running on Port:3001`)
})

io.on('connection', (socket) => {
    console.log(`User Connected:` + socket.id)

    // .on() method --> used to recieve this event
    // .emit() method --> used to send this event
        socket.on("message", (data) => { //we want to emit this data {to everyone except yourself}
            // console.log(data);
            socket.broadcast.emit('message', data) // to broadcast the data message to everyone else than you

        });

})