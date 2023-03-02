import {EachItemContainer, ButtonImage, ImageItem} from './styledComponents'

const ButtonImages = props => {
  const {buttonDetails, onGetId} = props
  const {id, imageUrl} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickImage = () => {
    onGetId(id, imageUrl)
  }
  return (
    <EachItemContainer key={id}>
      <ButtonImage
        type="button"
        onClick={onClickImage}
        data-testid={`${lowerCaseId}Button`}
      >
        <ImageItem src={imageUrl} alt={id} />
      </ButtonImage>
    </EachItemContainer>
  )
}
export default ButtonImages
