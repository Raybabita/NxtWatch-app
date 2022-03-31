import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const DeskTopViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: sticky;
  scroll-behavior: smooth;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MobileViewContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgColor};
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ImageEl = styled.img`
  height: 25px;
`

export const ListItemsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ListItems = styled.li`
  list-style-type: none;
  margin-left: 10px;
  margin-right: 10px;
`
export const TopHeaderButton = styled.button`
  height: 30px;
  width: 120px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: 2px solid #498bd6;
  padding-bottom: 10px;
  padding-top: 5px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 15px;
  color: ${props => props.colortext};
`

export const ThemeButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
`

export const SmallViewButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
`

export const ModalContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 150px;
  width: 300px;
  background-color: #ebebeb;
  border-radius: 10px;
`

export const AlignModalButton = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CancelButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 1px solid grey;
  padding: 10px;
  padding-right: 30px;
  padding-left: 30px;
  color: grey;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border: none;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
`
export const ModalContent = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: #000;
`
