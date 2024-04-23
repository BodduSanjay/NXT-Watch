import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {MdHome} from 'react-icons/md'
import {CiBoxList} from 'react-icons/ci'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

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

import Vidoecontext from '../../contextComponent/componetcontext'

class SideNav extends Component {
  state = {activeId: sidenavList[0].id}
  render() {
    const {activeId} = this.state
    return (
      <Vidoecontext.Consumer>
        {value => {
          const {isLight} = value
          return (
            <SideNavBgCont isLight={isLight}>
              <TopContUl>
                {sidenavList.map(each => {
                  const {id, text, path} = each
                  const isActive = activeId === id
                  return (
                    <Link to={`${path}`}>
                      <ListItem key={id} isActive={isActive}>
                        <Button type="button">
                          {(() => {
                            switch (id) {
                              case 1:
                                return (
                                  <MdHome color={isActive ? 'red' : 'gray'} />
                                )
                              case 2:
                                return (
                                  <HiFire color={isActive ? 'red' : 'gray'} />
                                )
                              case 3:
                                return (
                                  <SiYoutubegaming
                                    color={isActive ? 'red' : 'gray'}
                                  />
                                )
                              case 4:
                                return (
                                  <CiBoxList
                                    color={isActive ? 'red' : 'gray'}
                                  />
                                )
                              default:
                                return null
                            }
                          })()}
                        </Button>
                        <Heading isActive={isActive}>{text}</Heading>
                      </ListItem>
                    </Link>
                  )
                })}
              </TopContUl>
              <DetailsCont>
                <Heading2 isLight={isLight}>CONTACT US</Heading2>
                <SocialItemCont>
                  <SocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialItemCont>
                <ParaContact isLight={isLight}>
                  Enjoy! Now to see your channels and recommendations!
                </ParaContact>
              </DetailsCont>
            </SideNavBgCont>
          )
        }}
      </Vidoecontext.Consumer>
    )
  }
}
export default withRouter(SideNav)
