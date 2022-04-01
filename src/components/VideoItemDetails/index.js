import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../context/ThemeContext'
import './index.css'

import {
  VideoItemDetailRoute,
  VideoItemContainer,
  VideoContent,
  VideoTitleText,
  VideoLikesAndViewsContainer,
  VideoViewsContainer,
  VideoLikesContainer,
  VideoViewText,
  VideoYearText,
  HorizontalLine,
  ChannelDetailsContainer,
  ChannelImageLogo,
  ChannelDetailsContent,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  LoaderContainer,
  NavLink,
  NotFoundImage,
  DetailContainer,
  FailureDescription,
  Heading,
  RetryButton,
  FailureContainer,
  DetailButton,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetailsList: {},
    channelDataObj: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemsDetails()
  }

  getVideoItemsDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
      const data = fetchedData.video_details
      const convertedData = {
        channel: data.channel,
        description: data.description,
        id: data.id,
        publishedAt: data.published_at,
        thumbnailUrl: data.thumbnail_url,
        title: data.title,
        videoUrl: data.video_url,
        viewCount: data.view_count,
      }
      const channelData = {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
      }
      console.log(convertedData)
      console.log(channelData)

      this.setState({
        videoItemDetailsList: convertedData,
        channelDataObj: channelData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getVideoItemsDetails()
  }

  renderFailureView = () => (
    <FailureContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again.
      </FailureDescription>
      <NavLink>
        <RetryButton onClick={this.onClickRetry} type="button">
          Retry
        </RetryButton>
      </NavLink>
    </FailureContainer>
  )

  renderSpecificVideoView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, addToSavedVideoList, removeSavedVideo} = value

        const {
          videoItemDetailsList,
          channelDataObj,
          isSaved,
          isLiked,
          isDisliked,
        } = this.state
        const {
          videoUrl,
          title,
          id,
          viewCount,
          publishedAt,
          description,
        } = videoItemDetailsList

        const {profileImageUrl, name, subscriberCount} = channelDataObj

        const onClickLikeButton = () => {
          this.setState(preState => ({
            isLiked: !preState.isLiked,
            isDisliked: false,
          }))
        }

        const onClickDislikeButton = () => {
          this.setState(preState => ({
            isDisliked: !preState.isDisliked,
            isLiked: false,
          }))
        }

        const onClickSaveVideo = () => {
          if (isSaved === true) {
            removeSavedVideo(id)
          } else {
            addToSavedVideoList({...videoItemDetailsList})
          }
          this.setState(preState => ({isSaved: !preState.isSaved}))
        }

        const likeIcon = isLiked ? (
          <AiFillLike size={15} />
        ) : (
          <AiOutlineLike size={15} />
        )
        const dislikeIcon = isDisliked ? (
          <AiFillDislike size={15} />
        ) : (
          <AiOutlineDislike size={15} />
        )

        const likeClass = isLiked ? '#2563eb' : '#64748b '
        const dislikeClass = isDisliked ? '#2563eb' : '#64748b '

        const savedText = isSaved ? 'Saved' : 'Save'
        const savedClass = isSaved ? '#2563eb' : '#64748b '

        const textColor = isDarkTheme ? '#64748b' : '#64748b'

        return (
          <VideoContent>
            <div className="device-react-player">
              <ReactPlayer
                className="reactplayer"
                height="400px"
                width="100%"
                padding="20px"
                controls
                url={videoUrl}
              />
            </div>
            <div className="device-react-player">
              <ReactPlayer
                height="200px"
                padding="20px"
                width="100%"
                className="react-playerSmall-device"
                controls
                url={videoUrl}
              />
            </div>
            <div className="device-react-player">
              <VideoTitleText color={textColor}>{title}</VideoTitleText>
              <VideoLikesAndViewsContainer>
                <VideoViewsContainer>
                  <DetailContainer>
                    <VideoViewText color={textColor}>
                      {viewCount} views
                    </VideoViewText>
                  </DetailContainer>
                  <DetailContainer>
                    <VideoYearText color={textColor}>
                      {publishedAt}
                    </VideoYearText>
                  </DetailContainer>
                </VideoViewsContainer>
                <VideoLikesContainer>
                  <DetailButton
                    type="button"
                    color={likeClass}
                    onClick={onClickLikeButton}
                  >
                    {likeIcon}
                    <VideoViewText color={likeClass}> Like</VideoViewText>
                  </DetailButton>

                  <DetailButton
                    type="button"
                    color={dislikeClass}
                    onClick={onClickDislikeButton}
                  >
                    {dislikeIcon}

                    <VideoViewText color={dislikeClass}> Dislike</VideoViewText>
                  </DetailButton>

                  <DetailButton
                    color={savedClass}
                    type="button"
                    onClick={onClickSaveVideo}
                  >
                    <MdPlaylistAdd size={15} />
                    <VideoViewText>{savedText}</VideoViewText>
                  </DetailButton>
                </VideoLikesContainer>
              </VideoLikesAndViewsContainer>
              <HorizontalLine />
              <ChannelDetailsContainer>
                <ChannelImageLogo src={profileImageUrl} alt="channel logo" />
                <ChannelDetailsContent>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ChannelSubscribers color={textColor}>
                    {subscriberCount}
                  </ChannelSubscribers>
                  <ChannelDescription color={textColor}>
                    {description}
                  </ChannelDescription>
                </ChannelDetailsContent>
              </ChannelDetailsContainer>
            </div>
          </VideoContent>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSpecificVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSpecificVideoView()
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
          const bgColorClass = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <VideoItemDetailRoute
              data-testid="videoItemDetails"
              bgColor={bgColorClass}
            >
              <Header />
              <VideoItemContainer>
                <SideBar />
                {this.renderSpecificVideos()}
              </VideoItemContainer>
            </VideoItemDetailRoute>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
