import React, { FC } from 'react'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

interface Routes {
  link: string
  label: string
  icon: FC
  render: FC
  routeType: {
    drawer?: boolean
    bottomNav?: boolean
  }
}

const routes: Array<Routes> = [
  {
    link: '/',
    label: 'Home',
    icon: () => <InboxIcon />,
    render: () => <p>Home</p>,
    routeType: {
      drawer: true,
    },
  },
  {
    link: '/about',
    label: 'About',
    icon: () => <InboxIcon />,
    render: () => <p>About</p>,
    routeType: {
      drawer: true,
    },
  },
  {
    link: '/inicio',
    label: 'Início',
    icon: () => <RestoreIcon />,
    render: () => <p>Início</p>,
    routeType: {
      bottomNav: true,
    },
  },
  {
    link: '/meio',
    label: 'meio',
    icon: () => <LocationOnIcon />,
    render: () => <p>meio</p>,
    routeType: {
      bottomNav: true,
    },
  },
  {
    link: '/fim',
    label: 'fim',
    icon: () => <FavoriteIcon />,
    render: () => <p>fim</p>,
    routeType: {
      bottomNav: true,
    },
  },
  {
    link: '/lado',
    label: 'lado',
    icon: () => <FolderIcon />,
    render: () => <p>lado</p>,
    routeType: {
      bottomNav: true,
    },
  },
]

export default routes
