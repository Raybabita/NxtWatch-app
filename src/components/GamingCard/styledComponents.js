import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 5px;
`

export const ImageList = styled.img`
  height: 200px;
  width: 150px;
  @media screen and (max-width: 768px) {
    height: 120px;
    width: 250px;
  }
`

export const ListDetailContainer = styled.div`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
`
export const GamingDetails = styled.p`
  color: ${props => props.color};
  margin: 0px;
  font-size: 14px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const GamingViewstext = styled.p`
  color: ${props => props.color};
  margin: 0px;
  font-size: 10px;
`

export const GamingDetailsHeading = styled.h1`
  margin: 0px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
