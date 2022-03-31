import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  margin: 20px;
`

export const ImageList = styled.img`
  height: 200px;
  width: 350px;
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 150px;
  }
`

export const ListDetailContainer = styled.div`
  display: flex;
  justify-self: flex-start;
  margin: 0px;
  flex-direction: column;
  padding: 0px;
`
export const SavedVideoDetails = styled.p`
  color: ${props => props.color};
  margin: 0px;
  font-weight: bold;
  font-size: 16px;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const SavedVideoDetailsDescription = styled.p`
  color: ${props => props.color};
  margin: 0px;
  font-size: 14px;
  font-size: ${props => props.size};
  margin-left: 10px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
