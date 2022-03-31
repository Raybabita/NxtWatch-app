import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingCard from '../TrendingCard'
import ThemeContext from '../context/ThemeContext'
import {
  TrendingRoute,
  TrendingContainer,
  TrendingContentContainer,
  TrendingContent,
  Heading,
  LoaderContainer,
  FailureDescription,
  FailureContainer,
  NavLink,
  RetryButton,
  NotFoundImage,
  TrendingIconContainer,
  TrendingCardContainer,
  TrendingTitleContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingDataList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideo()
  }

  getTrendingVideo = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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

      const trendingUpdatedData = fetchedData.videos.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          ProfileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewsCount: eachItem.view_count,
      }))
      console.log(trendingUpdatedData)
      this.setState({
        trendingDataList: trendingUpdatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {trendingDataList} = this.state

        const trendingTitleBgClass = isDarkTheme ? '#181818' : '#f1f5f9'

        return (
          <>
            <TrendingContent>
              <TrendingContentContainer bgColor={trendingTitleBgClass}>
                <TrendingTitleContainer>
                  <TrendingIconContainer>
                    <AiFillFire color="red" size={20} />
                  </TrendingIconContainer>
                  <Heading>Trending</Heading>
                </TrendingTitleContainer>
              </TrendingContentContainer>
              <TrendingCardContainer>
                {trendingDataList.map(eachItem => (
                  <TrendingCard key={eachItem.id} trendingDetails={eachItem} />
                ))}
              </TrendingCardContainer>
            </TrendingContent>
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

  onClickRetry = () => {
    this.getTrendingVideo()
  }

  renderFailureView = () => (
    <FailureContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <FailureDescription className="jobs-failure-description">
        We are having some trouble to complete your request.Please try again.
      </FailureDescription>
      <NavLink>
        <RetryButton type="button" onClick={this.onClickRetry}>
          Retry
        </RetryButton>
      </NavLink>
    </FailureContainer>
  )

  renderAllTrendingVideoView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideosView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  renderTrendingVideo = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? ' #0f0f0f' : '#f9f9f9'

        return (
          <TrendingRoute data-testid="trending" bgColor={bgColor}>
            <Header />
            <TrendingContainer>
              <SideBar />
              {this.renderAllTrendingVideoView()}
            </TrendingContainer>
          </TrendingRoute>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return <>{this.renderTrendingVideo()}</>
  }
}

export default Trending
