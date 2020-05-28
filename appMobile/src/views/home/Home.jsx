import React, { useState } from 'react'
import { View } from 'react-native'
import SearchBottom from '../../components/searchBottom/SearchBottom'
import MapaComponent from '../../components/mapa/MapaComponent'

const Home = (props) => {
  const { navigation } = props
  const [searchState, setSearchState] = useState('')

  const handleSearch = () => {
    if (searchState.length > 0)
      navigation.navigate('Busca', {
        search: searchState,
      })
  }

  return (
    <>
      <MapaComponent />
      <SearchBottom
        value={searchState}
        setValue={setSearchState}
        onPress={handleSearch}
      />
    </>
  )
}

export default Home
