import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import Map from '@material-ui/icons/Map'
import Public from '@material-ui/icons/Public'

import Home from '../views/home/Home'
import DashMapa from '../views/dashMapa/DashMapa'
import CadastroRotas from '../views/dashViews/cadastroRotas/CadastroRotas'

export default [
  {
    incon: <HomeIcon />,
    path: '/',
    component: Home,
    titlePage: 'Home',
  },
  {
    incon: <Public />,
    path: '/mapa',
    component: DashMapa,
    titlePage: 'Dash Mapa',
  },
  {
    incon: <Map />,
    path: '/cadastro-rotas',
    component: CadastroRotas,
    titlePage: 'Entregas',
  },
]
