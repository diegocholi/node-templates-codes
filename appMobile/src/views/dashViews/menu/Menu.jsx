import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, Button } from 'react-native'
import SearchBottom from '../../../components/searchBottom/SearchBottom'
import LocalizacaoService from '../../../database/sql-lite/service/LocalizacaoService'

import { useApp } from '../../../contexts/AppContext'

const Menu = (props) => {
  const { logout } = useApp()
  const { navigation } = props
  const [searchState, setSearchState] = useState('')
  const [userPossition, setUserPossition] = useState([])

  useEffect(() => {
    let mountComponent = false
    if (!mountComponent)
      LocalizacaoService.findAll().then((rows) => {
        setUserPossition(rows.raw())
      })
    return () => {
      mountComponent = true
    }
  }, [])

  const handleSearch = () => {
    if (searchState.length > 0)
      navigation.navigate('Busca', {
        search: searchState,
      })
  }

  const logoutPress = () => {
    logout()
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
      <Button title={'Sair'} onPress={logoutPress} />

      <SearchBottom
        value={searchState}
        setValue={setSearchState}
        onPress={handleSearch}
      />
    </SafeAreaView>
  )
}

export default Menu
