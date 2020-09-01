import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import Map from '@material-ui/icons/Map'
import Public from '@material-ui/icons/Public'

import { Home, DashMapa, Viagens } from '../views/dashViews'

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
    path: '/cadastro-viagens',
    component: Viagens,
    titlePage: 'Entregas',
  },
]
