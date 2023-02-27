import styled from 'styled-components'

export const HeaderBgContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  padding: 2%;
  justify-content: space-between;
`
export const NxtWatchLogo = styled.img`
  height: 35px;
`
export const NxtWatchButton = styled.button`
  background-color: transparent;
  border: 0px;
  text-decoration: none;
  min-height: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

export const ProfileImg = styled.img`
  height: 28px;
`
export const LogoutAndThemeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
`
export const LogOutButton = styled.button`
  background-color: transparent;
  border: 2px solid black;
  display: flex;
  color: black;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`
export const LogoutPopUpContainer = styled.div`
  height: 25vh;
  background-color: black;
  width: 320px;
  padding: 3%;
  text-align: center;
  border-radius: 12px;
`
export const LogOutText = styled.p`
  color: white;
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 2px solid #f1f1f1;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding: 8px;
  width: 45%;
  color: #f1f1f1;
  margin-top: 20px;
`
export const ConfirmButton = styled.button`
  background-color: blue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding: 10px;
  color: #f1f1f1;
  width: 45%;
  margin-left: 10px;
  margin-top: 20px;
`
