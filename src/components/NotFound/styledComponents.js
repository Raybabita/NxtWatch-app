import styled from 'styled-components'

export const NotFoundRoute = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  align-items: center;
`

export const NotFoundContent = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 250px;
  margin: 10px;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  color: ${props => props.color};
`

export const Description = styled.p`
  text-align: center;
  font-size: 20px;
  color: ${props => props.color};
`
