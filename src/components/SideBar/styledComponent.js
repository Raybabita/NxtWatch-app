import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: flex;
  position: sticky;
  position: -webkit-sticky;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => props.bgColor};
  max-width: 300px;
  min-width: 250px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    max-width: 180px;
    min-width: 150px;
    display: ${props => props.isMobileViewDisplay};
  }
`

export const SidebarListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 0px;
  margin-left: 0px;
`

export const SideBarListItems = styled.div`
  list-style-type: none;
  display: flex;
  width: 100%;
  background-color: ${props => props.isActive};

  padding-left: 20px;
  justify-content: flex-start;
  align-items: center;
  :hover {
    background-color: ${props => props.bgColor};
    font-weight: bold;
    .nav-icons {
      color: red;
    }
  }
`
export const SideBarContactusListContainer = styled.div`
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: flex-start;
`

export const SideBarContactusList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const ParagraphHeading = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-left: 30px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-left: 10px;
  }
`

export const ParagraphContactus = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-left: 10px;
  }
`

export const ListItems = styled.div`
  list-style-type: none;
  margin-left: 10px;
  margin-right: 10px;
`

export const ImageEl = styled.img`
  height: 25px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
`
