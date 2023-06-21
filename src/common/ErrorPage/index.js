import {ReactComponent as ErrorIcon} from './errorIcon.svg'
import {Error, IconContainer, Info} from './styled'

function ErrorPage() {
  return (
    <>
      <IconContainer>
        <ErrorIcon />
      </IconContainer>
      <Error>Ooops! Something went wrong...</Error>
      <Info>
        Please check your network connection <br /> and try again
      </Info>
    </>
  )
}
export default ErrorPage
