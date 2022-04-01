import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SearchAndVideoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.bgColorClass};
  margin-top: 10px;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 50%;
  min-width: 200px;
  margin-top: 10px;
  border-radius: 6px;
  background-color: #d7dfe9;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 10px;
  }
`

export const InputEl = styled.input`
  height: 30px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #d7dfe9;
  outline: none;
`
export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const ListItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  width:100%
  list-style-type: none;
  @media screen and (max-width: 768px) {
      display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
     padding-left: 0px;
  
    
  }
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

export const NotFoundContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImage = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`

export const Heading = styled.h1`
  color: #1e293b;
`

export const FailureDescription = styled.p`
  color: #1e293b;
`

export const NotFoundDescription = styled.p`
  color: #1e293b;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #1e293b;
`

export const RetryButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: #3b82f6;
  border-radius: 8px;
  color: #1e293b;
  outline: none;
  border: none;
  cursor: pointer;
`
