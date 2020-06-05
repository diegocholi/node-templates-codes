import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import MapaComponent from './components/MapaComponent'
import GeolocationComponent from '../geolocation/GeolocationComponent'

const Mapa = () => {
  const [userPossition, setUserPossition] = useState({
    latitude: -49.3449255,
    longitude: -25.4226502,
  })

  useEffect(() => {
    console.log(userPossition)
  }, [userPossition])

  return (
    <SafeAreaView>
      <MapaComponent userPossition={userPossition} />
      <GeolocationComponent setUserPossition={setUserPossition} />
    </SafeAreaView>
  )
}

export default Mapa
