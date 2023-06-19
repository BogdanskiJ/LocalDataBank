import {PropTypes} from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import {StyledHeader, Wrapper} from './styled'

export default function LoadingPage({title}) {
  return (
    <Wrapper>
      <StyledHeader>{title}</StyledHeader>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress size={40} thickness={5} />
      </Box>
    </Wrapper>
  )
}

LoadingPage.propTypes = {
  title: PropTypes.string,
}

LoadingPage.defaultProps = {
  title: 'Pobieram listę kategorii',
}
