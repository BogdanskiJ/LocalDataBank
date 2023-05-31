import { ReactComponent as TriangleUp } from '../../../../common/images/triangleUp.svg';
import { ReactComponent as TriangleDown } from '../../../../common/images/triangleDown.svg';
import { ReactComponent as TriangleGray } from '../../../../common/images/triangleGray.svg';

export const Arrow = ({ order, sort }) => {

  return (
    (order[0] === sort ?
      (order[1] === "ASC" ?
        (<TriangleUp />)
        :
        (<TriangleDown />)
      ) :
      <TriangleGray fill={order[2] ? "none" : "blue"} />
    )
  )
}