import { DatabaseConnection } from '../SqlLite'

const table = 'localizacao'
const db = DatabaseConnection.getConnection()

const LocalizacaoService = {
  addData: (param) => {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into ${table} (latitude, longitude) 
              values (?, ?)`,
            [param.latitude, param.longitude],
            (_, { insertId, rows }) => {
              console.log('id insert: ' + insertId)
              resolve(insertId)
            }
          ),
            (sqlError) => {
              console.log(sqlError)
            }
        },
        (txError) => {
          console.log(txError)
        }
      )
    )
  },
  deleteById: (id) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `delete from ${table} where id = ?;`,
          [id],
          (_, { rows }) => {}
        ),
          (sqlError) => {
            console.log(sqlError)
          }
      },
      (txError) => {
        console.log(txError)
      }
    )
  },
  updateById: (param) => {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `update ${table} set nome = ? where id = ?;`,
            [param.nome, param.id],
            () => {}
          ),
            (sqlError) => {
              console.log(sqlError)
            }
        },
        (txError) => {
          console.log(txError)
        }
      )
    )
  },
  findAll: () => {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
            resolve(rows)
          }),
            (sqlError) => {
              console.log(sqlError)
            }
        },
        (txError) => {
          console.log(txError)
        }
      )
    )
  },
}

export default LocalizacaoService
