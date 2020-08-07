export const setBarOptions = (tabBarOptions) => {
  return {
    activeTintColor: tabBarOptions.activeTintColor
      ? tabBarOptions.activeTintColor
      : undefined, // Cor icone ativo
    inactiveTintColor: tabBarOptions.inactiveTintColor
      ? tabBarOptions.inactiveTintColor
      : undefined, // Cor icone inativo
    keyboardHidesTabBar: tabBarOptions.keyboardHidesTabBar
      ? tabBarOptions.keyboardHidesTabBar
      : false,
    activeBackgroundColor: tabBarOptions.activeBackgroundColor
      ? tabBarOptions.activeBackgroundColor
      : undefined,
    inactiveBackgroundColor: tabBarOptions.inactiveBackgroundColor
      ? tabBarOptions.inactiveBackgroundColor
      : undefined,
    showLabel: tabBarOptions.showLabel ? tabBarOptions.showLabel : false,
    safeAreaInsets: tabBarOptions.safeAreaInsets
      ? tabBarOptions.safeAreaInsets
      : undefined,
    style: {
      backgroundColor: tabBarOptions.backgroundColor
        ? tabBarOptions.backgroundColor
        : undefined,
    },
  }
}
