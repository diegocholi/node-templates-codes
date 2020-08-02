// import conection from "../ConectionDAO";
// import mensage from "../../config/mensage.json";
import { Filters, DAOConfig } from './interfaceBaseDAO'
import Database from './Database'

class BaseDAO extends Database {
  public static table: string

  constructor({ table }: DAOConfig) {
    super()
    BaseDAO.table = table
  }

  public insert(req: any) {
    let keys = Object.keys(req.body)
    let params: any = []

    keys.map((key) => {
      params.push(req.body[key])
    })

    let sql = `INSERT INTO ${BaseDAO.table} (
      ${keys.map((key: any, id: Number) => {
        if (id === keys.length - 1) return `${key}`
        return `${key}`
      })}
    ) 
    VALUES (
      ${params.map((item: any, id: any) => {
        item
        if (id === params.length - 1) return '?'
        return '?'
      })}
    )`

    let response = Database.insert(sql, params)
    return response
  }

  public get(key: any, id: Number) {
    var sql = `SELECT * FROM ${BaseDAO.table} WHERE ${key} = ${id}`
    return BaseDAO.first(sql)
  }

  public list(req: any) {
    var sql = `SELECT * FROM ${BaseDAO.table}`
    var filters = BaseDAO.getFiltrosParamsReq(req)
    if (filters[0].campo && filters[0].campo)
      sql = BaseDAO.gerarFiltrosSql(sql, filters)

    return BaseDAO.first(sql)
  }

  public static first(sql: string) {
    let response = Database.query(sql)
    return response
  }

  public static gerarFiltrosSql(sql: string, filters: [Filters]) {
    let valores: string[] = []
    filters.map((item) => {
      // Verificamos se é AutoCompelte
      if (item.autoComplete) valores.push(`%${item.valor}%`)
      else valores.push(item.valor)

      // Verificamos se já existe WHERE na string
      if (!sql.includes('WHERE')) {
        return item.autoComplete
          ? (sql += ` WHERE ${item.campo} LIKE ? `)
          : (sql += ` WHERE ${item.campo} = ? `)
      }

      return item.autoComplete
        ? (sql += `AND ${item.campo} LIKE ? `)
        : (sql += `AND ${item.campo} = ? `)
    })

    return this.connection.format(sql, valores)
  }

  public static getFiltrosParamsReq(req: any): [Filters] {
    let filters: [Filters] = [
      {
        campo: '',
        valor: '',
      },
    ]

    let autoComplete: boolean = false

    if (req.query) {
      // Buscamos as keys e seus respectivos valores
      let keys = Object.keys(req.query)
      let values = Object.values(req.query)

      // Verificamos se existem filtro com autocomplete
      keys.map((item: string, index: number) => {
        if (item === 'autocomplete') {
          keys.splice(index)
          values.splice(index)
          autoComplete = true
        }
      })

      // Inserimos nos valores da quary nos filters
      keys.map((item: string, index: number) => {
        if (!filters[0].campo)
          return (filters = [
            {
              campo: String(item),
              valor: String(values[index]),
              autoComplete: autoComplete,
            },
          ])
        return filters.push({
          campo: String(item),
          valor: String(values[index]),
          autoComplete: autoComplete,
        })
      })
    }

    if (req.params) {
      // Buscamos as keys e seus respectivos valores
      let keys = Object.keys(req.params)
      let values = Object.values(req.params)

      // Inserimos nos valores da params nos filters
      keys.map((item: string, index: number) => {
        if (!filters[0].campo)
          return (filters = [
            {
              campo: String(item),
              valor: String(values[index]),
              autoComplete: autoComplete,
            },
          ])
        return filters.push({
          campo: String(item),
          valor: String(values[index]),
          autoComplete: autoComplete,
        })
      })
    }

    return filters
  }
}

export default BaseDAO
