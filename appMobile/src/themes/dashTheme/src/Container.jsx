import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import createNavigation from './utils/createNavigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
import { setBarOptions } from './utils/barUtins'
import {
  routes,
  header,
  tabBarOptions,
  transitionSpecRoutes,
  initPage,
} from './utils/varsType'

/**
 * @param {routes} routes Rotas da aplicação
 * @param {header} header Configuração do header
 * @param {tabBarOptions} tabBarOptions configuração do menu inferior
 * @param {transitionSpecRoutes} transitionSpecRoutes Animação de troca de página
 * @param {initPage} initPage Página inicial da aplicação
 */
const Container = (props) => {
  const {
    routes = false,
    tabBarOptions = false,
    initPage = false,
    header = false,
  } = props
  const { Router, componentsRoutes } = createNavigation(props)

  const ContainerWithRoutes = () => {
    let i = 0
    return (
      <SafeAreaProvider>
        <StatusBar
          barStyle='light-content'
          backgroundColor={
            header.StatusBarColor ? header.StatusBarColor : 'red'
          }
        />
        <NavigationContainer>
          <Router.Navigator
            initialRouteName={initPage ? initPage : routes[0].route}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName
                routes.map((items) => {
                  if (route.name === items.route && items.icon) {
                    iconName = focused ? items.icon.name : items.icon.name
                  }
                })
                return <Icon name={iconName} size={size} color={color} />
              },
            })}
            tabBarOptions={setBarOptions(tabBarOptions)}
          >
            {componentsRoutes.map((items) => {
              i += 1
              return (
                <Router.Screen
                  key={i}
                  name={routes[i - 1].route}
                  component={items}
                />
              )
            })}
          </Router.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }

  const ContainerNotRoutes = () => {
    return <NavigationContainer />
  }

  return routes ? ContainerWithRoutes() : ContainerNotRoutes()
}

export default Container
