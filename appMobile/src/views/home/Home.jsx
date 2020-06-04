import React, { useState } from 'react'
import { View } from 'react-native'
import SearchBottom from '../../components/searchBottom/SearchBottom'
import Mapa from '../../components/mapa/Mapa'

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
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Mapa />
      <SearchBottom
        value={searchState}
        setValue={setSearchState}
        onPress={handleSearch}
      />
    </View>
  )
}

export default Home
