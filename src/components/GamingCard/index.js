import ThemeContext from '../context/ThemeContext'
import {
  ListItemContainer,
  ImageList,
  ListDetailContainer,
  GamingDetails,
  GamingViewstext,
  NavLink,
} from './styledComponents'

const GamingCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {gamingDetails} = props
      const {thumbnailUrl, title, viewsCount, id} = gamingDetails

      const color = isDarkTheme ? '#f9f9f9' : '#181818'
      const colortext = isDarkTheme ? '#64748b' : '#181818'

      return (
        <NavLink to={`/videos/${id}`}>
          <ListItemContainer>
            <ImageList src={thumbnailUrl} alt="video thumbnail" />
            <ListDetailContainer>
              <GamingDetails color={color}>{title}</GamingDetails>
              <GamingViewstext color={colortext}>
                {viewsCount} Watching Worldwide
              </GamingViewstext>
            </ListDetailContainer>
          </ListItemContainer>
        </NavLink>
      )
    }}
  </ThemeContext.Consumer>
)
export default GamingCard
