import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import SideBar from '../SideBar'
import Header from '../Header'
import SearchVideos from '../SearchVideos'
import ThemeContext from '../context/ThemeContext'
import {
  HomeRoute,
  HomeContainer,
  HomeSideBarContainer,
  HomeBannerContainer,
  LogoImage,
  BannerContent,
  GetItNowButton,
  HomeBannerContent,
  CloseButton,
} from './styledComponents'

class Home extends Component {
  state = {display: 'flex'}

  onCloseBanner = () => {
    this.setState({display: 'none'}, this.renderBannerView)
  }

  renderBannerView = () => {
    const {display} = this.state
    return (
      <>
        <HomeBannerContainer data-testid="banner" display={display}>
          <HomeBannerContent>
            <LogoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <CloseButton
              type="button"
              data-testid="close"
              onClick={this.onCloseBanner}
            >
              <AiOutlineClose size={10} color="#231f20" />
            </CloseButton>
          </HomeBannerContent>
          <BannerContent>
            Buy Nxt Watch Premium prepaid plans with
            <br />
            UPI
          </BannerContent>
          <GetItNowButton>GET IT NOW</GetItNowButton>
        </HomeBannerContainer>
        <SearchVideos />
      </>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          return (
            <HomeRoute data-testid="home" bgColor={bgColor}>
              <Header />
              <HomeContainer bgColor={bgColor}>
                <SideBar />
                <HomeSideBarContainer>
                  {this.renderBannerView()}
                </HomeSideBarContainer>
              </HomeContainer>
            </HomeRoute>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
