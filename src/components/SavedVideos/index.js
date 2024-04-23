import Vidoecontext from '../../contextComponent/componetcontext'
import {
  HomeBgDiv,
  SideVideoDiv,
  VideosDiv,
  ColumnContSV,
  FailureImageSV,
  FailureH1SV,
  FailureParaSV,
  TypeVideosDiv,
  TypeCont,
  IconBgDiv,
  Heading,
  TrendingUlCont,
} from './styledComponents'

const SavedVideos = () => (
  <Vidoecontext.Consumer>
    {value => {
      const {isLight, savedVideoList} = value

      return (
        <HomeBgDiv>
          <Header />
          <SideVideoDiv>
            <SideNav />
            <VideosDiv>
              {savedVideoList.length !== 0 ? (
                <TypeVideosDiv>
                  <TypeCont>
                    <IconBgDiv isLight={isLight}>
                      <MdOutlinePlaylistAdd
                        color="red"
                        height="25px"
                        width="25px"
                      />
                    </IconBgDiv>
                    <Heading>Saved Videos</Heading>
                  </TypeCont>
                  <TrendingUlCont>
                    {savedVideoList.map(each => {
                      return <TrendingVideosItem each={each} key={each.id} />
                    })}
                  </TrendingUlCont>
                </TypeVideosDiv>
              ) : (
                <ColumnContSV>
                  <FailureImageSV src={failureImageUrl} alt="failure image" />
                  <FailureH1SV isLight={isLight}>
                    No saved videos found
                  </FailureH1SV>
                  <FailureParaSV isLight={isLight}>
                    You can save your videos while watching them
                  </FailureParaSV>
                </ColumnContSV>
              )}
            </VideosDiv>
          </SideVideoDiv>
        </HomeBgDiv>
      )
    }}
  </Vidoecontext.Consumer>
)
export default SavedVideos
