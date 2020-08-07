import React from 'react'
import { View } from 'react-native'

const headerTitle = (items, header) => {
  return (
    <View style={header.headerTitleStyle}>
      {header.headerTitleImage
        ? header.headerTitleImage
        : header.appName
        ? header.appName
        : items.header.title}
    </View>
  )
}

const headerTitleDetail = (items, header) => {
  return (
    <View style={{ ...header.headerTitleStyle, marginRight: '21%' }}>
      {header.headerTitleImage
        ? header.headerTitleImage
        : header.appName
        ? header.appName
        : items.header.title}
    </View>
  )
}

export const headerMode = (items, header) => {
  if (items.header.headerMode) {
    return items.header.headerMode
  }
  return header.headerMode
}

export const confHeader = (items, header, transitionSpecRoutes) => {
  return {
    ...header,
    headerTitle: () => headerTitle(items, header),
    transitionSpec: {
      open: transitionSpecRoutes,
      close: transitionSpecRoutes,
    },
    headerRight: () =>
      header.headerButtomRight ? header.headerButtomRight : false,
    headerLeft: () =>
      header.headerButtomLeft ? header.headerButtomLeft : false,
  }
}

export const confDetailHeader = (itemsDetail, header, transitionSpecRoutes) => {
  const defaultLeftButtom = {
    ...header,
    headerTitle: () => headerTitleDetail(itemsDetail, header),
    transitionSpec: {
      open: transitionSpecRoutes,
      close: transitionSpecRoutes,
    },
    headerRight: () =>
      header.headerButtomRight ? header.headerButtomRight : false,
  }

  const leftButtomPerson = {
    ...header,
    headerTitle: () => headerTitleDetail(itemsDetail),
    transitionSpec: {
      open: transitionSpecRoutes,
      close: transitionSpecRoutes,
    },
    headerRight: () =>
      header.headerButtomRight ? header.headerButtomRight : false,
    headerLeft: () =>
      header.headerButtomLeftDetail
        ? header.headerButtomLeftDetail
        : header.headerButtomLeft
        ? header.headerButtomLeft
        : buttomBackDefault(),
  }
  return header.headerButtomLeftDetail ? leftButtomPerson : defaultLeftButtom
}
