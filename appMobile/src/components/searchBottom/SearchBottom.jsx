import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { styleSearchBottom, styleButtonOpenSearch } from '../../style/style'
import { colorTheme } from '../../style/containerStyle'

const SearchBottom = (props) => {
  const { onPress = false, value = false, setValue = false } = props
  const [openSearchState, setOpenSearchState] = useState(false)

  const openSearch = () => {
    setValue('')
    setOpenSearchState(true)
  }

  const closeSearch = () => {
    setOpenSearchState(false)
    if (onPress) onPress()
  }

  const searchInput = () => {
    return (
      <View style={styleSearchBottom.view}>
        <TextInput
          onChangeText={(text) => setValue(text)}
          value={value}
          style={styleSearchBottom.textInput}
          autoFocus={openSearchState}
        />
        <Icon.Button
          name={'search'}
          size={25}
          color={'gray'}
          backgroundColor={colorTheme}
          style={styleSearchBottom.iconButton}
          onPress={closeSearch}
        />
      </View>
    )
  }

  const buttonOpenSearch = () => {
    return (
      <View style={styleButtonOpenSearch.view}>
        <Icon.Button
          name={'search'}
          size={30}
          color={'gray'}
          backgroundColor={colorTheme}
          onPress={openSearch}
          style={styleButtonOpenSearch.iconButton}
        />
      </View>
    )
  }

  return openSearchState ? searchInput() : buttonOpenSearch()
}

export default SearchBottom
