import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkThemeActivated: false,
  onClickToChangeTheme: () => {},
  savedVideos: [],
  onClickToSaveTheVideo: () => {},
})

export default NxtWatchContext
