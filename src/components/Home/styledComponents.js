import styled from 'styled-components'

export const HomeRoute = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
`

export const HomeSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`
export const HomeBannerContainer = styled.div`
  display: flex;
  width: 100%;
  display: ${props => props.display};
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 40vh;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    width: 95%;
    height: 20vh;
    margin: 5px;
  }
`

export const HomeBannerContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LogoImage = styled.img`
  height: 50px;
  width: 150px;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 20px;
  }
`

export const BannerContent = styled.p`
  color: #1e293b;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const GetItNowButton = styled.button`
  align-self: flex-start;
  color: #1e293b;
  background-color: transparent;
  border-color: #1e293b;
  font-size: 16px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const CloseButton = styled.button`
  align-self: flex-start;
  color: #1e293b;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
