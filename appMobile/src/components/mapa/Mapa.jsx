import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import MapaComponent from './components/MapaComponent'
import GeolocationComponent from '../geolocation/GeolocationComponent'
import LocalizacaoService from '../../database/sql-lite/service/LocalizacaoService'

const Mapa = () => {
  const [userPossition, setUserPossition] = useState({})

  useEffect(() => {
    if (userPossition.latitude && userPossition.longitude)
      LocalizacaoService.addData({ ...userPossition })

    LocalizacaoService.findAll().then((rows) => {
      console.log(rows.raw())
    })
  }, [userPossition])

  return (
    <SafeAreaView>
      <MapaComponent userPossition={userPossition} />
      <GeolocationComponent setUserPossition={setUserPossition} />
    </SafeAreaView>
  )
}

export default Mapa
