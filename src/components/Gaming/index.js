import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'

import SideBar from '../SideBar'
import GamingCard from '../GamingCard'
import ThemeContext from '../context/ThemeContext'

import {
  GamingRoute,
  GamingContainer,
  GamingContentContainer,
  GamingContent,
  Heading,
  LoaderContainer,
  FailureDescription,
  FailureContainer,
  NavLink,
  RetryButton,
  NotFoundImage,
  GamingIconContainer,
  GamingCardContainer,
  GamingTitleContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Gaming extends Component {
  state = {gamingDataList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideo()
  }

  getGamingVideo = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewsCount: eachItem.view_count,
      }))
      console.log(updatedData)
      this.setState({
        gamingDataList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#181818' : '#f1f5f9'
        const {gamingDataList} = this.state
        return (
          <>
            <GamingContent>
              <GamingContentContainer bgColor={bgColor}>
                <GamingTitleContainer>
                  <GamingIconContainer>
                    <SiYoutubegaming color="red" size={20} />
                  </GamingIconContainer>
                  <Heading>Gaming</Heading>
                </GamingTitleContainer>
              </GamingContentContainer>
              <GamingCardContainer>
                {gamingDataList.map(eachItem => (
                  <GamingCard key={eachItem.id} gamingDetails={eachItem} />
                ))}
              </GamingCardContainer>
            </GamingContent>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getGamingVideo()
  }

  renderFailureView = () => (
    <FailureContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <FailureDescription>
        We are having some trouble to complete your request.Please try again.
      </FailureDescription>
      <NavLink>
        <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
      </NavLink>
    </FailureContainer>
  )

  renderAllGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? ' #0f0f0f' : '#f9f9f9'

          return (
            <GamingRoute data-testid="gaming" bgColor={bgColor}>
              <Header />
              <GamingContainer>
                <SideBar />
                {this.renderAllGamingVideos()}
              </GamingContainer>
            </GamingRoute>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
