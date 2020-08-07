import AsyncStorage from '@react-native-community/async-storage'

export const setData = async (key, value) => {
  try {
    key = '@RN' + key
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
    console.log('Erro ao salvar no local-storage')
  }
}

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@RN${key}`)
    return jsonValue ? JSON.parse(jsonValue) : null
  } catch (e) {
    // error reading value
    console.log('Erro ao salvar no local-storage')
  }
}
