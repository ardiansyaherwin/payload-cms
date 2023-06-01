import React from 'react';
import Template from '../components/layout/Template';
import NotFound from '../components/NotFound';
import useStyles from '../css/pages/[...slug]';
import { Props } from './[...slug]';
import GridContainer from '../components/layout/GridContainer';

const Custom404: React.FC<Props> = (props) => {
  const { footer, socialMedia } = props;
  const classes = useStyles();
  return (
    <Template
      className={classes.page}
      footer={footer}
      socialMedia={socialMedia}
    >
      <GridContainer>
        <NotFound />
      </GridContainer>
    </Template>
  );
};

export default Custom404;
