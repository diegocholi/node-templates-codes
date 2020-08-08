import React, { useEffect, useState, memo } from 'react'
import { SafeAreaView } from 'react-native'
import MapaComponent from './components/MapaComponent'
import getGeolocation from './geolocation/getGeolocation'
import LocalizacaoService from '../../database/sql-lite/service/LocalizacaoService'

import socketIOClient from 'socket.io-client'
const ENDPOINT = 'http://192.168.100.20:4040'

const Mapa = () => {
  const [userPossition, setUserPossition] = useState([])
  getGeolocation(setUserPossition)

  const socket = socketIOClient(ENDPOINT)

  // Cadastrando client
  var username = 'Mobile'
  socket.emit('register', username)

  /*Enviando mensagem direcionada*/
  var username = 'Web'
  var message = 'Enviando mensagem para a Web'
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

  useEffect(() => {
    let mounted = true
    if (mounted)
      if (userPossition.latitude && userPossition.longitude) {
        socket.emit('tracking', JSON.stringify(userPossition))
        LocalizacaoService.addData({ ...userPossition })

        LocalizacaoService.findAll().then((rows) => {
          console.log(rows.raw())
        })
      }

    return () => {
      mounted = false
    }
  }, [userPossition, socket])

  return (
    <SafeAreaView>
      <MapaComponent />
    </SafeAreaView>
  )
}

export default memo(Mapa)
