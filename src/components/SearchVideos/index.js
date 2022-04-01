import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {BsSearch} from 'react-icons/bs'
import VideoCard from '../VideoCard'

import {
  SearchAndVideoListContainer,
  SearchContainer,
  InputEl,
  ListItemContainer,
  SearchButton,
  FailureContainer,
  LoaderContainer,
  NotFoundImage,
  Heading,
  FailureDescription,
  NavLink,
  RetryButton,
  NotFoundDescription,
  NotFoundContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SearchVideos extends Component {
  state = {
    searchInput: '',

    VideoList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoList()
  }

  getVideoList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      console.log(updatedData)
      this.setState({
        VideoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = event => {
    this.setState({searchInput: event.target.value}, this.getVideoList)
  }

  onClickEnter = event => {
    const {searchInput} = this.state
    if (event.key === 'Enter') {
      this.setState({searchInput}, this.getVideoList)
    }
  }

  renderSearchView = () => {
    const {searchInput} = this.state
    return (
      <SearchContainer>
        <InputEl
          placeholder="Search"
          value={searchInput}
          onChange={this.onChangeInput}
          onKeyDown={this.onClickEnter}
          type="search"
        />
        <SearchButton
          type="button"
          onClick={this.onClickSearchButton}
          data-testid="searchButton"
        >
          <BsSearch color="#7e858e" size={20} />
        </SearchButton>
      </SearchContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.setState({searchInput: ''}, this.getVideoList)
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

  renderNotFound = () => (
    <NotFoundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <Heading>No Search results found</Heading>
      <NotFoundDescription className="jobs-failure-description">
        Try different key words or remove search filter
      </NotFoundDescription>
      <NavLink>
        <RetryButton type="button" onClick={this.onClickRetry}>
          Retry
        </RetryButton>
      </NavLink>
    </NotFoundContainer>
  )

  renderHomeVideos = () => {
    const {VideoList} = this.state
    const isSearchFound = VideoList.length === 0
    return (
      <SearchAndVideoListContainer>
        {this.renderSearchView()}
        {isSearchFound ? (
          this.renderNotFound()
        ) : (
          <ListItemContainer>
            {VideoList.map(eachItem => (
              <VideoCard key={eachItem.id} videoDetails={eachItem} />
            ))}
          </ListItemContainer>
        )}
      </SearchAndVideoListContainer>
    )
  }

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideos()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderAllVideos()}</>
  }
}

export default SearchVideos
