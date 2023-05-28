import React from 'react';
import useStyles from './css';
import { joinClassNames } from '../../../css/joinClassNames';

type Props = {
  className?: string;
}

const GridContainer: React.FC<Props> = ({ children, className }) => {
  const classes = useStyles();

  return (
    <div className={joinClassNames([classes.gridContainer, className])}>
      {children}
    </div>
  );
};

export default GridContainer;
