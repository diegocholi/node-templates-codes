import React from 'react'
import { Image } from 'react-native'
export const colorTheme = 'purple'

/**
 * Configuração de estilo do header
 */
export const headerConfig = {
  // appName: 'Direito do seu jeito', // Todas as págians com nome do app
  StatusBarColor: colorTheme,
  headerTitleImage: (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../images/Logo.png')}
    />
  ),
  headerMode: 'screen' /* float, none, screen */,
  headerStyle: {
    backgroundColor: colorTheme,
    // borderBottomEndRadius: 100,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  headerButtomRight: undefined, // Componente: Bodão direito
  headerButtomLeft: undefined, // Componente: Botão esqeurdo
  headerButtomLeftDetail: undefined, // Componente: Botão página de detalhe esquerdo
}

/**
 * Animação troca de tela
 */
export const transitionSpecRoutes = {
  animation: 'spring' /* timing ou spring*/,
  config: {
    stiffness: 4000 /* Velocidade da animação */,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

/**
 * Configurações de estilo do menu inferior
 */
export const tabBarOptions = {
  activeTintColor: 'black', // Cor icone ativo
  inactiveTintColor: 'gray', // Cor icone inativo
  activeBackgroundColor: undefined, // Cor de fundo para TAB ativa
  inactiveBackgroundColor: undefined, // Cor de fundo para TAB inativa
  keyboardHidesTabBar: true, // Ocultar menu quando teclado é aberto
  backgroundColor: 'white', // Cor de fundo da TAB BAR
  showLabel: false,
  safeAreaInsets: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
}
