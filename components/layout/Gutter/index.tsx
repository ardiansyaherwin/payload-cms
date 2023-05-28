import React from 'react';
import useStyles from './css';
import { joinClassNames } from '../../../css/joinClassNames';

type Props = {
  left?: boolean
  right?: boolean
  className?: string
}

const Gutter: React.FC<Props> = ({ children, className, left = false, right = false }) => {
  const classes = useStyles();
  return (
    <div className={joinClassNames([
      left && classes.left,
      right && classes.right,
      className])}
    >
      {children}
    </div>
  );
};

export default Gutter;
