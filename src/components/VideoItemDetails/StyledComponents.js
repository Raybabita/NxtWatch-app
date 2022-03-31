import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
`

export const VideoItemDetailRoute = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const VideoTitleText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  margin: 0px;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`
export const VideoLikesAndViewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`
export const VideoViewsContainer = styled.div`
  display: flex;
`

export const VideoLikesContainer = styled.div`
  display: flex;
  margin: 0px;
`

export const VideoViewText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

export const VideoYearText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin: 0px;
  }
`

export const VideoLikeText = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin: 0px;
  }
`
export const VideoDislikeText = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin: 0px;
  }
`

export const VideoSaved = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin: 0px;
  }
`

export const HorizontalLine = styled.hr`
  display: flex;
  color: 1px solid gray;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
`

export const ChannelImageLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  border-radius: 140px;
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`

export const ChannelDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`

export const ChannelName = styled.p`
  color: ${props => props.color};
  margin: 0px;
  font-family: 'Roboto';
  font-size: 14px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

export const ChannelSubscribers = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

export const ChannelDescription = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 480px;
  @media screen and (max-width: 768px) {
    margin-left: 200px;
    margin-top: 50px;
  }
`

export const FailureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const FailureDescription = styled.p`
  color: #1e293b;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`
export const NotFoundImage = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #1e293b;
`

export const RetryButton = styled.button`
  height: 40px;
  width: 100px;
  background-color: #3b82f6;
  border-radius: 8px;
  color: #1e293b;
  outline: none;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    height: 20px;
    width: 80px;
    font-size: 10px;
  }
`

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`
export const DetailButton = styled.button`
  background-color: transparent;
  border-radius: 8px;
  color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    height: 20px;
    width: 80px;
    font-size: 10px;
  }
`
