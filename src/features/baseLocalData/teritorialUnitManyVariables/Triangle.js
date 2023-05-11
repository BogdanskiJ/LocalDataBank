import { ReactComponent as TriangleUp } from '../../../common/images/triangleUp.svg';
import { ReactComponent as TriangleDown } from '../../../common/images/triangleDown.svg';
import { ReactComponent as TriangleGray } from '../../../common/images/triangleGray.svg';

export const TriangleVal = ({ order }) => {
  return (
    (order[0] === "val" ?
      (order[1] === "ASC" ?
        (<TriangleUp />)
        :
        (<TriangleDown />)
      )
      :
      (<TriangleGray />)
    )
  );
};

export const TriangleYear = ({ order }) => {
  return (
    (order[0] === "year" ?
      (order[1] === "ASC" ?
        (<TriangleUp />)
        :
        (<TriangleDown />)
      )
      :
      (<TriangleGray />)
    )
  );
};