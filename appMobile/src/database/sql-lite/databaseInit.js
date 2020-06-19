import { DatabaseConnection } from './SqlLite'

export const databaseInit = async () => {
  let db = await DatabaseConnection.getConnection()
  await db.executeSql(
    [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }],
    false,
    () => console.log('Foreign keys turned on')
  )

  var sql = [
    `DROP TABLE IF EXISTS localizacao;`,
    `CREATE TABLE IF NOT EXISTS localizacao (
          latitude VARCHAR(100),
          longitude VARCHAR(100)
      );`,
  ]

  db.transaction(
    (tx) => {
      for (var i = 0; i < sql.length; i++) {
        console.log('execute sql : ' + sql[i])
        tx.executeSql(sql[i])
      }
    },
    (error) => {
      console.log('error call back : ' + JSON.stringify(error))
      console.log(error)
    },
    () => {
      console.log('transaction complete call back ')
    }
  )
}
