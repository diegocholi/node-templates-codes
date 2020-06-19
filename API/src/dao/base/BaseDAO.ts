// import conection from "../ConectionDAO";
// import mensage from "../../config/mensage.json";
import { Filters, DAOConfig } from './interfaceBaseDAO'
import Database from '../Database'

class BaseDAO extends Database {
  private static table: string

  constructor({ table }: DAOConfig) {
    super()
    BaseDAO.table = table
  }

  public first(event: any) {
    event
  }

  public get(event: any) {
    let { res } = event
    var sql = `SELECT * FROM ${BaseDAO.table}`
    var filters = BaseDAO.gerarFiltrosParamsEvent(event)
    sql = BaseDAO.gerarFiltrosSql(sql, filters)
    BaseDAO.first(sql, res)
  }

  public static first(sql: string, res: any) {
    let response = Database.query(sql)
    response.then((result) => res.status(200).send(result))
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

  public static gerarFiltrosParamsEvent(event: any): [Filters] {
    const { req } = event

    let filters: [Filters] = [
      {
        campo: '',
        valor: '',
      },
    ]

    let autoComplete: boolean = false

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

    // Buscamos as keys e seus respectivos valores
    keys = Object.keys(req.params)
    values = Object.values(req.params)

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

    return filters
  }
}

export default BaseDAO
