// Realiza o require do express, http, e socketio
var app = require('express')()
// passa o express para o http-server
var http = require('http').Server(app)
// passa o http-server par ao socketio
var io = require('socket.io')(http)

// cria uma rota para fornecer o arquivo index.html
app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

var connectedUsers = {}

// sempre que o socketio receber uma conexão vai devoltar realizar o broadcast dela
io.on('connection', (socket) => {
  /* Cadastro de usuário no websocket */
  socket.on('register', (username) => {
    socket.username = username
    connectedUsers[username] = socket
  })

  /* Canal direcionado */
  socket.on('private_chat', (data) => {
    const to = data.to,
      message = data.message

    if (connectedUsers.hasOwnProperty(to)) {
      connectedUsers[to].emit('private_chat', {
        //O nome de usuário do remetente
        username: socket.username,
        // Mensagem enviada ao destinatário
        message: message,
      })
    }
  })

  socket.on('tracking', (msg) => {
    console.log(msg)
    io.emit('tracking', msg)
  })
})

// Inicia o servidor na porta informada, no caso vamo iniciar na porta 3030
http.listen(4040, function () {
  console.log('Servidor rodando em: http://localhost:4040')
})
