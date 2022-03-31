import ThemeContext from '../context/ThemeContext'

import {
  ListItemContainer,
  ImageList,
  ListDetailContainer,
  TrendingDetails,
  TrendingDetailsDescription,
  NavLink,
} from './styledComponents'

const TrendingCard = props => (
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
              <TrendingDetails color={textColor}>{title}</TrendingDetails>
              <TrendingDetailsDescription color={Color}>
                {name}
              </TrendingDetailsDescription>
              <TrendingDetailsDescription color={Color}>
                {viewsCount} views
              </TrendingDetailsDescription>
              <TrendingDetailsDescription color={Color}>
                {publishedAt}
              </TrendingDetailsDescription>
            </ListDetailContainer>
          </ListItemContainer>
        </NavLink>
      )
    }}
  </ThemeContext.Consumer>
)

export default TrendingCard
