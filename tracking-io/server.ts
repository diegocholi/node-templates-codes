// Realiza o require do express, http, e socketio
var app = require('express')()
// passa o express para o http-server
var http = require('http').Server(app)
// passa o http-server par ao socketio
var io = require('socket.io')(http)

// cria uma rota para fornecer o arquivo index.html
app.get('/chat', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

// sempre que o socketio receber uma conexão vai devoltar realizar o broadcast dela
io.on('connection', (socket) => {
  socket.on('tracking', (msg) => {
    console.log(msg)
    io.emit('tracking', msg)
  })
})

// inicia o servidor na porta informada, no caso vamo iniciar na porta 3030
http.listen(4040, function () {
  console.log('Servidor rodando em: http://localhost:4040')
})
