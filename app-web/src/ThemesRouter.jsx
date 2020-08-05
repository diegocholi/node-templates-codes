import React from 'react'
import useApp from './contexts/AppContext'
import DashTheme from './themes/dashTheme/DashTheme'
import PortalTheme from './themes/portalTheme/PortalTheme'

const ThemesRouter = () => {
  const { token } = useApp()
  return token ? <DashTheme /> : <PortalTheme />
}

export default ThemesRouter
