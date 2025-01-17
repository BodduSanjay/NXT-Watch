import Vidoecontext from '../../contextComponent/componetcontext'

const NotFound = () => (
  <Vidoecontext.Consumer>
    {value => {
      const {isLight} = value

      const NotFoundUrl = isLight
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <HomeBgDiv>
          <Header />
          <SideVideoDiv>
            <SideNav />
            <VideosDiv>
              <ColumnCont>
                <FailureImage src={NotFoundUrl} alt="not found" />
                <FailureH1 isLight={isLight}>Page Not Found</FailureH1>
                <FailurePara isLight={isLight}>
                  We are sorry, the page you requested could not be found.
                </FailurePara>
              </ColumnCont>
            </VideosDiv>
          </SideVideoDiv>
        </HomeBgDiv>
      )
    }}
  </Vidoecontext.Consumer>
)
export default NotFound
