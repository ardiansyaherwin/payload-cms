import React from 'react';
import colors from '../../css/colors';

const NotFound: React.FC = () => (
  <h2>
    <span style={{ color: colors.red }}>404</span>
    {' '}
    - Page Not
    {' '}
    <span style={{ color: colors.blue }}>Found</span>
  </h2>
);

export default NotFound;
