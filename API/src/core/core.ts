import { handlers } from '../../handlers'
import { router } from '../api/utils/router/router'

const core = () => {
  handlers.map((item) => {
    item.routes.map((route) =>
      router({
        route: route.route,
        method: route.method,
        middlewareValidate: route.middlewareValidate,
        execute: item.handler,
      })
    )
  })
}

export default core
