import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'
import {MdMenu, MdClose} from 'react-icons/md'
import {IoSunnyOutline} from 'react-icons/io5'
import {IoIosLogOut} from 'react-icons/io'
import {CiDark} from 'react-icons/ci'
import {
  HeaderContainer,
  ButtonEl,
  LogoEl,
  SmallDeviceCont,
  PopupContainer,
  AlertContainer,
  AlertPara,
  AlertBtnCont,
  ButtonCancel,
  ButtonConfirm,
  ButtonLogoutLg,
  LargeDeviceCont,
  ProfileImage,
} from './styledComponents'

import Vidoecontext from '../../contextComponent/componetcontext'

const Header = props => (
  <Vidoecontext.Consumer>
    {value => {
      const {isLight, changeTheme, toggleMenulist} = value

      const redirectToHome = () => {
        return <Redirect to="/" />
      }

      const LogoutClicked = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const sidenavList = [
        {
          id: 1,
          text: 'Home',
          path: '/',
        },
        {
          id: 2,
          text: 'Trending',
          path: '/trending',
        },
        {
          id: 3,
          text: 'Gaming',
          path: '/gaming',
        },
        {
          id: 4,
          text: 'Saved Videos',
          path: '/saved-videos',
        },
      ]

      const logoImg = isLight
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      return (
        <HeaderContainer isLight={isLight}>
          <ButtonEl onClick={redirectToHome}>
            <LogoEl src={logoImg} src="nxt logo" />
          </ButtonEl>
          <SmallDeviceCont>
            <ButtonEl onClick={changeTheme}>
              {isLight ? <CiDark /> : <IoSunnyOutline color="white" />}
            </ButtonEl>
            <PopupContainerMenu>
              <Popup
                modal
                trigger={
                  <ButtonEl onClick={toggleMenulist}>
                    <MdMenu color={`${isLight ? 'black' : 'white'}`} />
                  </ButtonEl>
                }
              >
                {close => (
                  <>
                    <MenuBgCont isLight={isLight}>
                      <ButtonEl>
                        <MdClose color={`${isLight ? 'black' : 'white'}`} />
                      </ButtonEl>
                      <TopContUl>
                        {sidenavList.map(each => {
                          const {id, text, path} = each
                          const isActive = activeId === id
                          return (
                            <Link to={`${path}`}>
                              <ListItem key={id} isActive={isActive}>
                                <ButtonEl type="button">
                                  {(() => {
                                    switch (id) {
                                      case 1:
                                        return (
                                          <MdHome
                                            color={isActive ? 'red' : 'gray'}
                                          />
                                        )
                                      case 2:
                                        return (
                                          <HiFire
                                            color={isActive ? 'red' : 'gray'}
                                          />
                                        )
                                      case 3:
                                        return (
                                          <SiYoutubegaming
                                            color={isActive ? 'red' : 'gray'}
                                          />
                                        )
                                      case 4:
                                        return (
                                          <MdOutlinePlaylistAdd
                                            color={isActive ? 'red' : 'gray'}
                                          />
                                        )
                                      default:
                                        return null
                                    }
                                  })()}
                                </ButtonEl>
                                <Heading isActive={isActive}>{text}</Heading>
                              </ListItem>
                            </Link>
                          )
                        })}
                      </TopContUl>
                    </MenuBgCont>
                  </>
                )}
              </Popup>
            </PopupContainerMenu>
            <PopupContainer>
              <Popup
                modal
                trigger={
                  <ButtonEl>
                    <IoIosLogOut color={`${isLight ? 'black' : 'white'}`} />
                  </ButtonEl>
                }
              >
                {close => (
                  <>
                    <AlertContainer isLight={isLight}>
                      <AlertPara>Are you sure you want to logout?</AlertPara>
                      <AlertBtnCont>
                        <ButtonCancel
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Cancel
                        </ButtonCancel>
                        <ButtonConfirm type="button" onClick={LogoutClicked}>
                          Confirm
                        </ButtonConfirm>
                      </AlertBtnCont>
                    </AlertContainer>
                  </>
                )}
              </Popup>
            </PopupContainer>
          </SmallDeviceCont>
          <LargeDeviceCont>
            <ButtonEl onClick={changeTheme}>
              {isLight ? <CiDark /> : <IoSunnyOutline color="white" />}
            </ButtonEl>
            <ButtonEl>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ButtonEl>
            <PopupContainer>
              <Popup
                modal
                trigger={
                  <ButtonLogoutLg isLight={isLight}>Logout</ButtonLogoutLg>
                }
              >
                {close => (
                  <>
                    <AlertContainer>
                      <AlertPara>Are you sure you want to logout?</AlertPara>
                      <AlertBtnCont>
                        <ButtonCancel
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Cancel
                        </ButtonCancel>
                        <ButtonConfirm type="button" onClick={LogoutClicked}>
                          Confirm
                        </ButtonConfirm>
                      </AlertBtnCont>
                    </AlertContainer>
                  </>
                )}
              </Popup>
            </PopupContainer>
          </LargeDeviceCont>
        </HeaderContainer>
      )
    }}
  </Vidoecontext.Consumer>
)
export default withRouter(Header)
