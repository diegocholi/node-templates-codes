import socketIOClient from 'socket.io-client'
const ENDPOINT = 'http://127.0.0.1:4040'

const webSocket = (response, setResponse) => {
  const socket = socketIOClient(ENDPOINT)
  // Cadastrando client
  var username = 'Web'
  socket.emit('register', username)

  /*Enviando mensagem direcionada*/
  username = 'Mobile'
  var message = 'Enviando mensagem para a Mobile teste2'
  socket.emit('private_chat', {
    to: username,
    message: message,
  })

  /*Recebendo mensagem direcionada*/
  socket.on('private_chat', function (data) {
    var username = data.username
    var message = data.message
    console.log(username + ': ' + message)
  })

  socket.on('tracking', (request) => {
    request = JSON.parse(request)
    setResponse([
      ...response,
      // Aqui vai o array com todos os markers
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [request.longitude, request.latitude],
        },
      },
    ])
  })
}

export default webSocket
