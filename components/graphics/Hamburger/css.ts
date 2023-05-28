import { createUseStyles } from 'react-jss';
import { base } from '../../../css/base';
import colors from '../../../css/colors';

const generateLineStyles = (styles) => ({
  transition: 'all 400ms',
  transformOrigin: 'center',
  stroke: colors.antique,
  strokeWidth: '2px',
  vectorEffect: 'non-scaling-stroke',
  ...styles,
});

export default createUseStyles({
  hamburger: {
    overflow: 'visible',
    width: base(),
    height: base(),
  },
  line1: (props: {
      isActive?: boolean,
    }) => generateLineStyles({
    opacity: props.isActive ? 0 : undefined,
    transform: props.isActive ? `translate(0, ${base(-0.5)})` : undefined,
  }),
  line2: (props: {
      isActive?: boolean,
    }) => generateLineStyles({
    opacity: 1,
    transform: props.isActive ? 'rotate(45deg)' : undefined,
  }),
  line3: (props: {
      isActive?: boolean,
    }) => generateLineStyles({
    opacity: props.isActive ? 1 : 0,
    transform: props.isActive ? 'rotate(-45deg)' : undefined,
  }),
  line4: (props: {
      isActive?: boolean,
    }) => generateLineStyles({
    opacity: props.isActive ? 0 : undefined,
    transform: props.isActive ? `translate(0, ${base(0.5)})` : undefined,
  }),
});
