import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideoList: [],
  addToSavedVideoList: () => {},
  removeSavedVideo: () => {},
  activeTab: 'HOME',
  activeTabItem: () => {},
  isMobileView: false,
  toggleMenuOnMobileView: () => {},
})

export default ThemeContext
