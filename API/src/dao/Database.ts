import confDb from '../config/confDb.json'
import mensage from '../config/mensage.json'

console.log(mensage.startDb)
const mysql = require('mysql')

class Database {
  public static connection: any
  constructor() {
    Database.connection = mysql.createConnection({
      host: confDb.host,
      user: confDb.user,
      password: confDb.password,
      database: confDb.database,
    })
  }

  static query(sql: any) {
    return new Promise((resolve, reject) => {
      Database.connection.query(sql, (err: any, rows: any) => {
        if (err) return reject(err)
        resolve(rows)
      })
    })
  }

  static close() {
    return new Promise((resolve, reject) => {
      Database.connection.end((err: any) => {
        if (err) return reject(err)
        resolve()
      })
    })
  }
}

export default Database
