import { openDatabase } from 'react-native-sqlite-storage'

export const DatabaseConnection = {
  getConnection: () => openDatabase({ name: 'database.db' }),
}
