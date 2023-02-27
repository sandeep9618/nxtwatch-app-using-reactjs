import styled from 'styled-components'

export const MediumDevicesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginContainer = styled.form`
  padding: 2%;
  min-height: 63vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px 2px #e2e8f0;
  border-radius: 8px;
  width: 30%;
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
  color: #64748b;
  margin-top: 30px;
`
export const Input = styled.input`
  border: 1px solid #94a3b8;
  padding: 8px;
  border-radius: 5px;
  margin-top: 10px;
  outline: none;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0px;
  margin-left: 0px;
  margin-top: 8px;
`

export const CheckBox = styled.input``

export const ShowPasswordLabel = styled.label`
  font-size: 12px;
`
export const LoginButton = styled.button`
  color: white;
  background-color: red;
  padding: 8px;
  width: 100%;
  cursor: pointer;
  border: 0px;
  border-radius: 5px;
  margin-top: 25px;
  margin-bottom: 5px;
`
export const ErrorLoginMsg = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 0px;
`
