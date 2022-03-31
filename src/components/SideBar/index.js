import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'

import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../context/ThemeContext'

import {
  ImageEl,
  SideBarContainer,
  SideBarListItems,
  SidebarListItemsContainer,
  ParagraphHeading,
  SideBarContactusList,
  SideBarContactusListContainer,
  ParagraphContactus,
  NavLink,
} from './styledComponent'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, activeTabItem, isMobileView} = value

      const color = isDarkTheme ? '#ffffff' : '#000000'

      const hoverBgColor = isDarkTheme ? '#424242' : '#f1f5f9'

      const bgColor = isDarkTheme ? '#ffffff' : '#000000'

      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

      const bgColorClassName = isDarkTheme ? '#212121' : '#f9f9f9'

      const onClickHomeTabItem = () => {
        activeTabItem('HOME')
      }

      const onClickTrendingTabItem = () => {
        activeTabItem('TRENDING')
      }

      const onClickGamingTabItem = () => {
        activeTabItem('GAMING')
      }

      const onClickSavedVideosTabItem = () => {
        activeTabItem('SAVED VIDEOS')
      }

      const isMobileViewDisplay = isMobileView ? 'display' : 'none'

      return (
        <SideBarContainer
          bgColor={bgColorClassName}
          isMobileViewDisplay={isMobileViewDisplay}
        >
          <SidebarListItemsContainer>
            <NavLink to="/" color={color}>
              <SideBarListItems
                onClick={onClickHomeTabItem}
                isActive={activeTab === 'HOME' ? `${hoverBgColor}` : ''}
                bgColor={hoverBgColor}
              >
                <AiFillHome className="nav-icons" size={20} />
                <ParagraphHeading color={textColor}>Home</ParagraphHeading>
              </SideBarListItems>
            </NavLink>
            <NavLink to="/trending" color={color}>
              <SideBarListItems
                onClick={onClickTrendingTabItem}
                isActive={
                  activeTab === 'TRENDING' ? `${hoverBgColor}` : 'transparent'
                }
                bgColor={hoverBgColor}
              >
                <AiFillFire className="nav-icons" size={20} />
                <ParagraphHeading color={textColor}>Trending</ParagraphHeading>
              </SideBarListItems>
            </NavLink>
            <NavLink to="/gaming" color={color}>
              <SideBarListItems
                onClick={onClickGamingTabItem}
                isActive={activeTab === 'GAMING' ? `${hoverBgColor}` : ''}
                bgColor={hoverBgColor}
              >
                <SiYoutubegaming className="nav-icons" size={20} />
                <ParagraphHeading color={textColor}>Gaming</ParagraphHeading>
              </SideBarListItems>
            </NavLink>
            <NavLink to="/saved-videos" color={color}>
              <SideBarListItems
                onClick={onClickSavedVideosTabItem}
                isActive={activeTab === 'SAVED VIDEOS' ? `${hoverBgColor}` : ''}
                bgColor={hoverBgColor}
              >
                <MdPlaylistAdd className="nav-icons" size={20} />
                <ParagraphHeading color={textColor}>
                  Saved videos
                </ParagraphHeading>
              </SideBarListItems>
            </NavLink>
          </SidebarListItemsContainer>
          <SidebarListItemsContainer>
            <SideBarContactusList>
              <ParagraphContactus color={textColor}>
                CONTACT US
              </ParagraphContactus>
            </SideBarContactusList>
            <SideBarContactusList>
              <ImageEl
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />

              <ImageEl
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />

              <ImageEl
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SideBarContactusList>
            <SideBarContactusListContainer>
              <ParagraphContactus color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </ParagraphContactus>
            </SideBarContactusListContainer>
          </SidebarListItemsContainer>
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
