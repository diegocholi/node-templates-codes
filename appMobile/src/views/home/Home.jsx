import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
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
    <SafeAreaView>
      <Mapa />
      <SearchBottom
        value={searchState}
        setValue={setSearchState}
        onPress={handleSearch}
      />
    </SafeAreaView>
  )
}

export default Home
