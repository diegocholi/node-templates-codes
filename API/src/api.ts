import core from './core/core'
import express from 'express'
import bodyParser from 'body-parser'
import mensage from './config/mensage.json'
export const api = express()
export const startApilication = () => {
  console.log(mensage.startCoreApilication)
  let cors = require('cors')
  // Setando aplicação para aceitar requisições em Json
  api.use(bodyParser.json())
  api.use(
    cors({
      origin: '*',
    })
  )
  // Setando parametros para decode de URL
  api.use(bodyParser.urlencoded({ extended: false }))

  // Portar que a api vai servir
  api.listen(3000)

  // Iniciando Core de cotas
  core()
}
