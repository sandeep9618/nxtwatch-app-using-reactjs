import styled from 'styled-components'

export const NavBarBgContainer = styled.div`
  @media screen and (max-width: 576px) {
    display: none;
    width: 0px;
  }
  width: 20%;
  padding: 2%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  margin-top: 0px;
  background-color: ${props =>
    props.isDarkThemeActivated ? '#231f20' : '#ffffff'};
`
export const NavOptions = styled.ul`
  padding-left: 0px;
  margin-top: 0px;
  list-style-type: none;
`
export const NavOption = styled.li`
  list-style-type: none;
  display: flex;
  padding-left: 0px;
  align-items: center;
`
export const NavOptionText = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-left: 20px;
  color: ${props => (props.isDarkThemeActivated ? '#ffffff' : '#000000')};
`
const backgroudColorOfActiveOption = obj => {
  const {isDarkThemeActivated, isActiveOption} = obj
  if (isDarkThemeActivated && isActiveOption) {
    return '#383838'
  }
  if (isDarkThemeActivated && !isActiveOption) {
    return '#231f20'
  }
  if (!isDarkThemeActivated && isActiveOption) {
    return '#f1f5f9'
  }
  return 'transparent'
}

export const NavButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 42px;
  color: ${props => (props.isDarkThemeActivated ? '#ffffff' : '#000000')};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 90%;
  border-radius: 6px;
  background-color: ${props =>
    backgroudColorOfActiveOption({
      isDarkThemeActivated: props.isDarkThemeActivated,
      isActiveOption: props.isActiveOption,
    })};
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactUsHeading = styled.h1`
  font-size: 12px;
  font-weight: 700;
  color: ${props => (props.isDarkThemeActivated ? '#ffffff' : '#000000')};
`
export const ContactUsDescription = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.isDarkThemeActivated ? '#ffffff' : '#000000')};
`
export const SocialMediaIconsContainer = styled.div`
  display: flex;
`
export const SocialMediaIcon = styled.img`
  height: 30px;
  margin-right: 10px;
`
