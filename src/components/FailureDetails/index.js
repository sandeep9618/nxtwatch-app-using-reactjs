import {
  FailureDetailsContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext'

const FailureDetails = props => {
  const {onReRender} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkThemeActivated} = value
        const failureImgUrl = isDarkThemeActivated
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const onReRenderDetails = () => {
          onReRender()
        }
        return (
          <FailureDetailsContainer>
            <FailureImg src={failureImgUrl} alt="failure view" />
            <FailureHeading isDarkThemeActivated={isDarkThemeActivated}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription isDarkThemeActivated={isDarkThemeActivated}>
              We are having some trouble to complete your request. <br /> Please
              try again.
            </FailureDescription>
            <RetryButton type="button" onClick={onReRenderDetails}>
              Retry
            </RetryButton>
          </FailureDetailsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureDetails
