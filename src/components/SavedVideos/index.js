import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideoCard from '../SavedVideoCard'
import ThemeContext from '../context/ThemeContext'

import {
  VideoSavedRoute,
  SavedVideoContent,
  SavedVideoContentContainer,
  SavedVideoIconContainer,
  SavedVideoCardContainer,
  SavedVideoTitleContainer,
  NoSavedContainer,
  Heading,
  LoaderContainer,
  NoSavedContent,
  Description,
  Image,
} from './styledComponents'

class SavedVideos extends Component {
  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoaderContainer>
  )

  renderTrendingVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideoList, isDarkTheme} = value
        const showEmptyView = savedVideoList.length === 0

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
        const savedVideoTitleBgClass = isDarkTheme ? '#181818' : '#f1f5f9'

        const bgColor = isDarkTheme ? ' #0f0f0f' : '#f1f1f1'
        return (
          <>
            {showEmptyView ? (
              <NoSavedContainer bgColor={bgColor}>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                  alt="no saved videos"
                />
                <Heading color={textColor}>No saved videos found</Heading>
                <Description color={textColor}>
                  You can save your videos while watching them.
                </Description>
              </NoSavedContainer>
            ) : (
              <SavedVideoContent>
                <SavedVideoContentContainer bgColor={savedVideoTitleBgClass}>
                  <SavedVideoTitleContainer>
                    <SavedVideoIconContainer>
                      <AiFillFire color="red" size={30} />
                    </SavedVideoIconContainer>
                    <Heading>Saved Videos</Heading>
                  </SavedVideoTitleContainer>
                </SavedVideoContentContainer>
                <SavedVideoCardContainer>
                  {savedVideoList.map(eachItem => (
                    <SavedVideoCard
                      key={eachItem.id}
                      trendingDetails={eachItem}
                    />
                  ))}
                </SavedVideoCardContainer>
              </SavedVideoContent>
            )}
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <VideoSavedRoute data-testid="savedVideos" bgColor={bgColor}>
              <Header />
              <NoSavedContent>
                <SideBar />
                {this.renderTrendingVideosView()}
              </NoSavedContent>
            </VideoSavedRoute>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
