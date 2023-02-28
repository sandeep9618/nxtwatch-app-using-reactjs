import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkThemeActivated: false,
  onClickToChangeTheme: () => {},
})

export default NxtWatchContext
