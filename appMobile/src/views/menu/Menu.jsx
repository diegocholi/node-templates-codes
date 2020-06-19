import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import SearchBottom from '../../components/searchBottom/SearchBottom'
import LocalizacaoService from '../../database/sql-lite/service/LocalizacaoService'

const Menu = (props) => {
  const { navigation } = props
  const [searchState, setSearchState] = useState('')
  const [userPossition, setUserPossition] = useState([])

  LocalizacaoService.findAll().then((rows) => {
    setUserPossition(rows.raw())
  })

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
      <Text>
        Posições salva:{' '}
        {userPossition.map((item) => item.latitude + item.longitude)}
      </Text>

      <SearchBottom
        value={searchState}
        setValue={setSearchState}
        onPress={handleSearch}
      />
    </SafeAreaView>
  )
}

export default Menu
