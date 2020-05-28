## Depêndencias de projeto para o módulo de rotas funcionar corretamente:

#### Documentação -> https://reactnavigation.org/

```
{
    "name": "App_Mobile",
    "version": "0.0.1",
    "private": true,
    "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",s
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/bottom-tabs": "^5.4.4",
    "@react-navigation/native": "^5.3.2",
    "@react-navigation/stack": "^5.3.6",
    "react": "16.11.0",
    "react-native": "0.62.2",
    "react-native-gesture-handler": "^1.6.1",
    "react-native-reanimated": "^1.8.0",
    "react-native-safe-area-context": "^1.0.0",
    "react-native-screens": "^2.7.0",
    "react-native-vector-icons": "^6.6.0"
  },
  "devDependencies": {
    "@babel/core": "^7.9.6",
    "@babel/runtime": "^7.9.6",
    "@react-native-community/eslint-config": "^1.1.0",
    "babel-jest": "^26.0.1",
    "eslint": "^7.0.0",
    "jest": "^26.0.1",
    "metro-react-native-babel-preset": "^0.59.0",
    "react-test-renderer": "16.11.0"
  },
  "jest": {
    "preset": "react-native"
  }
}
```

## Container:

### Chamada do component

```
<Container
  routes={routes}
  header={headerConfig}
  tabBarOptions={tabBarOptions}
  transitionSpecRoutes={transitionSpecRoutes}
  initPage={'Home'}
/>
```

### Detalhes de props

#### Props routes

```
routes = [
  {
    component: Componente que a rota aponta: Component React,
    route: Nome da rota: string,
    header: {
      title: Titulo para header: string,
    },
    icon: {
      name: Nome do icone FontAwesome: string,
    },
    detailsRoutes: [ -> Detail View: Lista de Objetos
    {
        component: Componente que a rota aponta: Component React,
        route: Nome da rota: string,
        header: {
          title: Titulo para header: string,
        },
      },
    ],
  }
]
```

#### Props header

```
header = {
  appName: Nome do aplicativo aplicado em todas as páginas: String,
  StatusBarColor: Cor da barra de status do android,
  headerTitleImage: ( -> Imagem + Logo: Component React EX:
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../images/Logo.png')}
    />
  ),
  headerMode: Ocultar/mostrar header -> float, none, screen: string,
  headerStyle: {
    backgroundColor: cor do header: string,
    borderBottomEndRadius: Border radios a direita: Number,
  },
  headerTintColor: Cor do icone de voltar nativo: string,
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  headerButtomRight: Componente: Bodão direito: Component React,
  headerButtomLeft: Componente: Botão esqeurdo: Component React,
  headerButtomLeftDetail: Componente: Botão página de detalhe esquerdo: Component React,
}
```

#### Props tabBarOptions

```
tabBarOptions = {
  activeTintColor: Cor icone ativo: string,
  inactiveTintColor: Cor icone inativo: string,
  activeBackgroundColor: Cor de fundo para TAB ativa: string,
  inactiveBackgroundColor: Cor de fundo para TAB inativa: string,
  keyboardHidesTabBar: Ocultar menu quando teclado é aberto: true ou false,
  backgroundColor: Cor de fundo da TAB BAR: string,
  showLabel: Label visivel ou não visivel: true ou false,
  safeAreaInsets: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
}
```

#### Props transitionSpecRoutes

```
transitionSpecRoutes = {
  animation: Tipo de animação -> timing ou spring: string,
  config: {
    stiffness: Velocidade da animação -> 4000: Number ,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
},
```

#### Props initPage

```
initPage: Página inicial da aplicação: string,
```
