import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingRoute = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const TrendingContainer = styled.div`
  display: flex;

  background-color: ${props => props.bgColor};
  justify-content: flex-start;
`

export const TrendingContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

export const TrendingContentContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const TrendingTitleContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`
export const TrendingIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background-color: #000;
  padding: 10px;
  height: 40px;
  width: 40px;
  margin-left: 20px;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    border-radius: 40px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 25px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 34px;
  color: #000;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const TrendingCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
`

export const LoaderContainer = styled.div`
  display: flex;
  margin-top: 90px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const FailureContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const FailureDescription = styled.p`
  color: #1e293b;
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
`

export const NotFoundImage = styled.img`
  height: 250px;
  width: 250px;
`
