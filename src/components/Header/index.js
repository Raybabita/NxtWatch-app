import {withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'

import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {RiMoonFill} from 'react-icons/ri'

import ThemeContext from '../context/ThemeContext'

import {
  MobileViewContainer,
  ImageEl,
  ThemeButton,
  ListItemsContainer,
  ListItems,
  TopHeaderButton,
  SmallViewButton,
  CancelButton,
  ModalContent,
  ConfirmButton,
  AlignModalButton,
  ModalContainer,
  DeskTopViewContainer,
  NavLink,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {
          isDarkTheme,
          toggleTheme,
          toggleMenuOnMobileView,
          isMobileView,
        } = value

        const onClickToggle = () => {
          toggleTheme()
        }

        const ThemeIcons = isDarkTheme ? (
          <FiSun size={20} color="#ffffff" />
        ) : (
          <RiMoonFill size={20} />
        )

        const websiteLogoImageUrl = isDarkTheme
          ? `https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png`
          : `https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png`

        const btnClassName = isDarkTheme ? '#ffffff' : '#3b82f6'

        const bgColorClassName = isDarkTheme ? '#212121' : '#f9f9f9'

        const renderDeskTopView = () => (
          <DeskTopViewContainer bgColor={bgColorClassName}>
            <NavLink>
              <ImageEl src={websiteLogoImageUrl} alt="website logo" />
            </NavLink>
            <ListItemsContainer>
              <ListItems>
                <ThemeButton data-testid="theme" onClick={onClickToggle}>
                  {ThemeIcons}
                </ThemeButton>
              </ListItems>
              <ListItems>
                <ImageEl
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ListItems>
              <ListItems>
                <Popup
                  modal
                  trigger={
                    <TopHeaderButton
                      type="button"
                      colortext={btnClassName}
                      data-testid="iconButton"
                    >
                      Logout
                    </TopHeaderButton>
                  }
                >
                  {close => (
                    <ModalContainer>
                      <ModalContent>
                        Are you sure, you want to logout
                      </ModalContent>

                      <AlignModalButton>
                        <CancelButton
                          type="button"
                          data-testid="closeButton"
                          colortext={btnClassName}
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          type="button"
                          colortext={btnClassName}
                          onClick={onClickLogout}
                        >
                          Confirm
                        </ConfirmButton>
                      </AlignModalButton>
                    </ModalContainer>
                  )}
                </Popup>
              </ListItems>
            </ListItemsContainer>
          </DeskTopViewContainer>
        )

        const onClickMobileMenuToggle = () => {
          toggleMenuOnMobileView()
        }

        const istext = isMobileView ? 'jello' : 'how ar'

        const renderMobileView = () => (
          <MobileViewContainer bgColor={bgColorClassName}>
            <NavLink>
              <ImageEl src={websiteLogoImageUrl} alt="website logo" />
            </NavLink>
            <ListItemsContainer>
              <ListItems>
                <SmallViewButton data-testid="theme" onClick={onClickToggle}>
                  {ThemeIcons}
                </SmallViewButton>
              </ListItems>
              <ListItems>
                <SmallViewButton onClick={onClickMobileMenuToggle}>
                  <GiHamburgerMenu />
                </SmallViewButton>
              </ListItems>
              <ListItems>
                <Popup
                  modal
                  trigger={
                    <SmallViewButton type="button" data-testid="iconButton">
                      <FiLogOut />
                    </SmallViewButton>
                  }
                >
                  {close => (
                    <ModalContainer>
                      <ModalContent>
                        Are you sure, you want to logout
                      </ModalContent>

                      <AlignModalButton>
                        <CancelButton
                          type="button"
                          colortext={btnClassName}
                          data-testid="closeButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          type="button"
                          colortext={btnClassName}
                          onClick={onClickLogout}
                        >
                          Confirm
                        </ConfirmButton>
                      </AlignModalButton>
                    </ModalContainer>
                  )}
                </Popup>
              </ListItems>
            </ListItemsContainer>
          </MobileViewContainer>
        )

        return (
          <>
            {renderDeskTopView()}
            {renderMobileView()}
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
