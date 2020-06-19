import { api } from '../../../api'
import middleware from '../../permissionamento/middlewares/Middlewares'
import { createEvent } from './utils/utils'

interface Router {
  route: string
  method: string
  middlewareValidate?: boolean
  execute: any
}

export const router = ({
  route,
  method,
  middlewareValidate,
  execute,
}: Router) => {
  middlewareValidate
  switch (method) {
    case 'get':
      if (middlewareValidate)
        api.get(route, middleware, async (req: any, res: any, next: any) => {
          try {
            let event = createEvent(req, res)
            await execute(event)
            // Váriaveis não utilizadas
            next
          } catch (err) {
            res.status(400).send({ error: 'Erro ao tentar recuperar a senha' })
          }
        })
      else
        api.get(route, async (req: any, res: any, next: any) => {
          try {
            let event = createEvent(req, res)
            await execute(event)
            // Váriaveis não utilizadas
            next
          } catch (err) {
            res.status(400).send({ error: 'Erro ao tentar recuperar a senha' })
          }
        })
      return
    case 'post':
      if (middlewareValidate)
        api.post(route, middleware, async (req: any, res: any, next: any) => {
          try {
            let event = createEvent(req, res)
            await execute(event)
            // Váriaveis não utilizadas
            next
          } catch (err) {
            res.status(400).send({ error: 'Erro ao tentar recuperar a senha' })
          }
        })
      else
        api.post(route, async (req: any, res: any, next: any) => {
          try {
            let event = createEvent(req, res)
            await execute(event)
            // Váriaveis não utilizadas
            next
          } catch (err) {
            res.status(400).send({ error: 'Erro ao tentar recuperar a senha' })
          }
        })
      return
    default:
      return
  }
}
