import React from 'react'
import { Container } from './theme/navigation'
import { routes } from './Routes'
import { databaseInit } from './database/sql-lite/databaseInit'

import {
  headerConfig,
  tabBarOptions,
  transitionSpecRoutes,
} from './style/containerStyle'

const App = () => {
  databaseInit()
  return (
    <Container
      routes={routes}
      header={headerConfig}
      tabBarOptions={tabBarOptions}
      transitionSpecRoutes={transitionSpecRoutes}
      initPage={'Home'}
    />
  )
}

export default App
