import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isDarkThemeActivated ? '#212121' : '#ffffff'};
`
export const LoginContainer = styled.form`
  padding: 2%;
  min-height: 68vh;
  display: flex;
  flex-direction: column;
  box-shadow: ${props =>
    props.isDarkThemeActivated ? 'black' : '0px 0px 30px 2px #e2e8f0'};
  border-radius: 8px;
  width: 30%;
  background-color: ${props =>
    props.isDarkThemeActivated ? '#000000' : '#ffffff'};
  @media screen and (max-width: 576px) {
    width: 90%;
    min-height: 45vh;
    padding-top: 28px;
    padding: 20px;
  }
`

export const WebSiteLogo = styled.img`
  height: 30px;
  width: 130px;
  text-align: center;
`
export const WebSiteLogoContainer = styled.div`
  width: 100%;
  text-align: center;
`
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDarkThemeActivated ? '#f1f5f9' : ' #64748b')};
  margin-top: 40px;
`
export const Input = styled.input`
  border: 2px solid
    ${props => (props.isDarkThemeActivated ? '#424242' : '#94a3b8')};
  padding: 8px;
  border-radius: 5px;
  margin-top: 10px;
  outline: none;
  color: ${props => (props.isDarkThemeActivated ? '#f1f5f9' : ' #000000')};
  font-family: Roboto;
  background-color: transparent;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0px;
  margin-left: 0px;
  margin-top: 8px;
`

export const CheckBox = styled.input`
  cursor: pointer;
  outline: none;
`

export const ShowPasswordLabel = styled.label`
  font-size: 12px;
  color: ${props => (props.isDarkThemeActivated ? '#f1f5f9' : ' #000000')};
`
export const LoginButton = styled.button`
  color: #ffffff;
  padding: 8px;
  width: 100%;
  cursor: pointer;
  border: 0px;
  border-radius: 5px;
  margin-top: 25px;
  margin-bottom: 5px;
  outline: none;
  background-color: ${props => (props.isDarkThemeActivated ? 'blue' : 'red')};
`
export const ErrorLoginMsg = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 0px;
`
export const LoginCredintials = styled.p`
  cursor: pointer;
  border: 0px;
  border-radius: 5px;
  margin-top: 25px;
  margin-bottom: 5px;
  outline: none;
  color: blue;
  background-color: transparent;
  text-align: end;
  margin-bottom: 0px;
  font-size: 12px;
  margin-top: 0px;
  font-weight: 300;
`
