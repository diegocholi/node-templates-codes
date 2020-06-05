import React, { useState } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import SearchBottom from '../../components/searchBottom/SearchBottom'

const Menu = (props) => {
  const { navigation } = props
  const [searchState, setSearchState] = useState('')

  const handleSearch = () => {
    if (searchState.length > 0)
      navigation.navigate('Busca', {
        search: searchState,
      })
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Text>Menu</Text>

      <SearchBottom
        value={searchState}
        setValue={setSearchState}
        onPress={handleSearch}
      />
    </SafeAreaView>
  )
}

export default Menu
