import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { headerMode, confHeader, confDetailHeader } from './headerUtils'

/**
 *
 * @param {*} props.routes Objeto com as rotas do sistema
 * @param {*} props.header Objeto com as configurações do header
 * @param {*} props.transitionSpecRoutes Objeto que contem as configurações de animação por página
 */
const createNavigation = (props) => {
  const { routes = false, header = false, transitionSpecRoutes = false } = props
  const componentsRoutes = []
  const Stack = createStackNavigator()

  // Mount response navigation
  if (routes)
    routes.map((items) => {
      if (header)
        componentsRoutes.push(() => (
          <Stack.Navigator headerMode={headerMode(items, header)}>
            <Stack.Screen
              name={items.route}
              component={items.component}
              options={confHeader(items, header, transitionSpecRoutes)}
            />
            {items.detailsRoutes &&
              items.detailsRoutes.map((itemsDetail) => (
                <Stack.Screen
                  key={itemsDetail.route}
                  name={itemsDetail.route}
                  component={itemsDetail.component}
                  options={confDetailHeader(
                    itemsDetail,
                    header,
                    transitionSpecRoutes
                  )}
                />
              ))}
          </Stack.Navigator>
        ))
      else componentsRoutes.push(items.component)
    })

  return {
    Router: createBottomTabNavigator(),
    componentsRoutes: routes ? componentsRoutes : undefined,
  }
}

export default createNavigation
