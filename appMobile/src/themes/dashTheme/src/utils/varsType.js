import React from 'react'

export const routes = [
  {
    component: React,
    route: String,
    header: {
      title: String,
    },
    icon: {
      name: String,
    },
    detailsRoutes: [
      {
        component: React,
        route: String,
        header: {
          title: String,
        },
      },
    ],
  },
]

export const header = {
  appName: String,
  StatusBarColor: String,
  headerTitleImage: React,
  headerMode: String,
  headerStyle: {
    backgroundColor: String,
    borderBottomEndRadius: Number,
  },
  headerTintColor: String,
  headerTitleStyle: {
    fontWeight: String,
    textAlign: String,
    alignSelf: String,
    flex: Number,
  },
  headerButtomRight: React,
  headerButtomLeft: React,
  headerButtomLeftDetail: React,
}

export const tabBarOptions = {
  activeTintColor: String,
  inactiveTintColor: String,
  activeBackgroundColor: String,
  inactiveBackgroundColor: String,
  keyboardHidesTabBar: Boolean,
  backgroundColor: String,
  showLabel: Boolean,
  safeAreaInsets: {
    bottom: Number,
    left: Number,
    right: Number,
    top: Number,
  },
}

export const transitionSpecRoutes = {
  animation: String,
  config: {
    stiffness: Number,
    damping: Number,
    mass: Number,
    overshootClamping: Boolean,
    restDisplacementThreshold: Number,
    restSpeedThreshold: Number,
  },
}

export const initPage = String
