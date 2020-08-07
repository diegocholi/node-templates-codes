import Home from '../views/dashViews/home/Home'
import Settings from '../views/dashViews/menu/Menu'
import Busca from '../views/dashViews/buscaResult/BuscaResult'

export const DashRoutes = [
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
