import './index.css'

const Thumbnail = props => {
  const {details, thumbnailClickedFunction} = props
  const {thumbnailUrl, id} = details

  const thumbnailClicked = () => {
    const randomNumber = Math.floor(Math.random() * 30)
    thumbnailClickedFunction(randomNumber, id)
  }

  return (
    <li>
      <button type="button" onClick={thumbnailClicked}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
