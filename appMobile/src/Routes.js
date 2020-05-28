import Home from './views/home/Home'
import Settings from './views/menu/Menu'
import Busca from './views/buscaResult/BuscaResult'

export const routes = [
  {
    component: Home,
    route: 'Home',
    header: {
      title: 'Home',
    },
    icon: {
      name: 'home',
    },
    detailsRoutes: [
      {
        component: Busca,
        route: 'Busca',
        header: {
          title: 'Busca',
        },
      },
    ],
  },
  {
    component: Settings,
    route: 'Menu',
    header: {
      title: 'Menu',
    },
    icon: {
      name: 'bars',
    },
  },
]
