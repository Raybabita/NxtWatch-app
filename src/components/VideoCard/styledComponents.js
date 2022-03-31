import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItems = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  margin-right: 10px;
  max-width: 250px;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 350px;
  }
`

export const ThumbnailImage = styled.img`
  height: 150px;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 150px;
  }
`

export const ListItemContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`

export const ListItemDetails = styled.div`
  display: flex;
  margin: 0px;
`

export const ChannelDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const ListItemIcon = styled.img`
  height: 20px;
  width: 20px;
`

export const ListItemDescription = styled.p`
  display: flex;
  color: ${props => props.color};
  margin: 0px;
  font-size: 12px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #1e293b;
  margin-bottom: 10px;
`
