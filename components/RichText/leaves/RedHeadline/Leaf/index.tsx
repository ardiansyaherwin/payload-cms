import React from 'react';
import colors from '../../../../../css/colors';

interface Props {
  attributes: any;
  children?: React.ReactNode
}

const RedHeadline: React.FC<Props> = ({ attributes, children }) => (
  <span
    {...attributes}
    style={{ color: colors.red, textTransform: 'uppercase' }}
  >
    {children}
  </span>
);

export default RedHeadline;
