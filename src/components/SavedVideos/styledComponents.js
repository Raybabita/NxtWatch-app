import styled from 'styled-components'

export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const VideoSavedRoute = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const NoSavedContent = styled.div`
  display: flex;
  align-items: center;
`
export const SavedVideoCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
`

export const SavedVideoTitleContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`
export const SavedVideoIconContainer = styled.div`
  border-radius: 80px;
  background-color: #000;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
`
export const SavedVideoContentContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  align-items: center;
`

export const SavedVideoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

export const Image = styled.img`
  width: 250px;
  margin: 10px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
`

export const Heading = styled.h1`
  color: ${props => props.color};
  text-align: center;
  font-size: 30px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const Description = styled.p`
  color: ${props => props.color};
  text-align: center;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  margin-top: 90px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
