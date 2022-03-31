import ThemeContext from '../context/ThemeContext'
import {
  ListItems,
  ListItemIcon,
  ThumbnailImage,
  ListItemContent,
  ListItemDescription,
  ChannelDetailContainer,
  ListItemDetails,
  NavLink,
} from './styledComponents'

const VideoCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {videoDetails} = props
      const {
        channel,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
        id,
      } = videoDetails

      const {name, profileImageUrl} = channel

      const textColor = isDarkTheme ? '#cbd5e1' : '#212121'
      const color = isDarkTheme ? ' #475569' : '#212121'
      return (
        <NavLink to={`/videos/${id}`} key={id}>
          <ListItems>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <ListItemContent>
              <ListItemIcon src={profileImageUrl} alt="channel logo" />
              <ChannelDetailContainer>
                <ListItemDescription color={textColor}>
                  {title}
                </ListItemDescription>
                <ListItemDescription color={color}>{name}</ListItemDescription>
                <ListItemDetails>
                  <ListItemDescription color={color}>
                    {viewCount} views
                  </ListItemDescription>
                  <ListItemDescription color={color}>
                    {publishedAt}{' '}
                  </ListItemDescription>
                </ListItemDetails>
              </ChannelDetailContainer>
            </ListItemContent>
          </ListItems>
        </NavLink>
      )
    }}
  </ThemeContext.Consumer>
)

export default VideoCard
