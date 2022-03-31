import ThemeContext from '../context/ThemeContext'

import {
  ListItemContainer,
  ImageList,
  ListDetailContainer,
  SavedVideoDetails,
  SavedVideoDetailsDescription,
  NavLink,
} from './styledComponents'

const SavedVideoCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {trendingDetails} = props
      const {
        publishedAt,
        thumbnailUrl,
        title,
        id,
        viewsCount,
        channel,
      } = trendingDetails
      const {name} = channel
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
      const Color = isDarkTheme ? '#64748b' : '#181818'

      return (
        <NavLink to={`videos/${id}`}>
          <ListItemContainer>
            <ImageList src={thumbnailUrl} alt="video thumbnail" />
            <ListDetailContainer>
              <SavedVideoDetails color={textColor}>{title}</SavedVideoDetails>
              <SavedVideoDetailsDescription color={Color}>
                {name}
              </SavedVideoDetailsDescription>
              <SavedVideoDetailsDescription color={Color}>
                {viewsCount} views
              </SavedVideoDetailsDescription>
              <SavedVideoDetailsDescription color={Color}>
                {publishedAt}
              </SavedVideoDetailsDescription>
            </ListDetailContainer>
          </ListItemContainer>
        </NavLink>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideoCard
