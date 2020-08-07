import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import SearchBottom from '../../../components/searchBottom/SearchBottom'

const BuscaResult = (props) => {
  const { route, navigation } = props
  const { search } = route.params
  const [searchState, setSearchState] = useState('')

  useEffect(() => {
    if (search) setSearchState(search)
  }, [search])

  const handleSearch = () => {
    /**/
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Text>Você Digitou: {searchState} </Text>

      <SearchBottom
        value={searchState}
        setValue={setSearchState}
        onPress={handleSearch}
      />
    </View>
  )
}

export default BuscaResult
