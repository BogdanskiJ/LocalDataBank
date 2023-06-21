import {ReactComponent as ArrowUp} from './images/arrowUp.svg'
import {ReactComponent as ArrowDown} from './images/arrowDown.svg'

export const Arrow = ({order, sort}) =>
  order[0] === sort ? (
    order[1] === 'ASC' ? (
      <ArrowUp />
    ) : (
      <ArrowDown />
    )
  ) : order[1] === 'DSC' ? (
    <ArrowUp />
  ) : (
    <ArrowDown />
  )
