import React from 'react'
import { DashRoutes } from './routes/DashRoutes'

import { Container } from './themes/dashTheme'
import LoginTheme from './themes/loginTheme/LoginTheme'
import { useApp } from './contexts/AppContext'

import {
  headerConfig,
  tabBarOptions,
  transitionSpecRoutes,
} from './style/containerStyle'

const ThemeRouter = () => {
  const { signed } = useApp()

  return signed ? (
    <Container
      routes={DashRoutes}
      header={headerConfig}
      tabBarOptions={tabBarOptions}
      transitionSpecRoutes={transitionSpecRoutes}
      initPage={'Home'}
    />
  ) : (
    <LoginTheme />
  )
}

export default ThemeRouter
