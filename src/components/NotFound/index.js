import Header from '../Header'
import SideBar from '../SideBar'

import {
  NotFoundContainer,
  Heading,
  NotFoundContent,
  Description,
  NotFoundRoute,
  Image,
} from './styledComponents'

import ThemeContext from '../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const color = isDarkTheme ? '#f9f9f9' : ' #0f0f0f'

      const bgColor = isDarkTheme ? ' #0f0f0f' : '#f1f1f1'

      return (
        <NotFoundRoute bgColor={bgColor}>
          <Header />
          <NotFoundContent>
            <SideBar />
            <NotFoundContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
              <Heading color={color}>Page Not Found</Heading>
              <Description color={color}>
                we are sorry, the page you requested could not be found.
              </Description>
            </NotFoundContainer>
          </NotFoundContent>
        </NotFoundRoute>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
