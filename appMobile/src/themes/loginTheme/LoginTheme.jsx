import React from 'react'
import { Button, View } from 'react-native'
import { useApp } from '../../contexts/AppContext'

const LoginTheme = () => {
  const { auth } = useApp()
  const loginPress = () => {
    auth()
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Button title={'Entrar'} onPress={loginPress} />
    </View>
  )
}

export default LoginTheme
