import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkThemeActivated: false,
  onClickToChangeTheme: () => {},
  savedVideos: [],
  onClickToSaveTheVideo: () => {},
  activeNavOption: 'HOME',
  onChangeActiveNavOption: () => {},
})

export default NxtWatchContext
