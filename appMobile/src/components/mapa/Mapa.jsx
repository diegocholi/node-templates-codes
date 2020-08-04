import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import MapaComponent from './components/MapaComponent'
import GeolocationComponent from '../geolocation/GeolocationComponent'
import LocalizacaoService from '../../database/sql-lite/service/LocalizacaoService'

import socketIOClient from 'socket.io-client'
const ENDPOINT = 'http://192.168.100.44:4040'

const Mapa = () => {
  const [userPossition, setUserPossition] = useState({})
  const socket = socketIOClient(ENDPOINT)

  useEffect(() => {
    if (userPossition.latitude && userPossition.longitude) {
      LocalizacaoService.addData({ ...userPossition })

      LocalizacaoService.findAll().then((rows) => {
        console.log(rows.raw())
      })

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

      socket.emit('tracking', JSON.stringify(userPossition))
    }
  }, [userPossition])

  return (
    <SafeAreaView>
      <MapaComponent userPossition={userPossition} />
      <GeolocationComponent setUserPossition={setUserPossition} />
    </SafeAreaView>
  )
}

export default Mapa
