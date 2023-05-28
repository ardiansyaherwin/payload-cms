import React from 'react';
import NextLink from 'next/link';
import { Modal, useModal } from '@faceless-ui/modal';
import { Cell, Grid } from '@faceless-ui/css-grid';
import useStyles from './css';
import Logo from '../../graphics/Logo';
import Hamburger from '../../graphics/Hamburger';
import { Props } from './types';
import GridContainer from '../GridContainer';
import LargeBody from '../../type/LargeBody';
import Link from '../../Link';
import LetsTalk from '../../LetsTalk';

const MENU_SLUG = 'main-menu';

const Header: React.FC<Props> = ({ megaMenu, socialMedia }) => {
  const { modalState, toggleModal } = useModal();
  const isActive = modalState[MENU_SLUG] && modalState[MENU_SLUG].isOpen;
  const classes = useStyles({ isActive });

  return (
    <header className={classes.header}>
      <NextLink
        href="/"
        className={classes.logo}
      >
        <Logo className={classes.icon} />
      </NextLink>
      <button
        type="button"
        className={classes.menuButton}
        onClick={() => toggleModal(MENU_SLUG)}
      >
        <Hamburger active={isActive} />
      </button>
      <Modal
        slug={MENU_SLUG}
        className={classes.menu}
      >
        <GridContainer>
          <Grid>
            <Cell
              cols={8}
              htmlElement="nav"
            >
              {megaMenu?.nav?.map(({ link }, i) => (
                <Link
                  {...link}
                  className={classes.primaryNavItem}
                  key={i}
                >
                  <h3
                    style={i === 0 ? { marginTop: 0 } : undefined}
                  >
                    {link.label}
                  </h3>
                </Link>
              ))}
            </Cell>
            <Cell
              cols={3}
            >
              {socialMedia?.links?.map(({ url, label }, i) => (
                <LargeBody key={i}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.secondaryNavItem}
                  >
                    {label}
                  </a>
                </LargeBody>
              ))}
            </Cell>
          </Grid>
        </GridContainer>
        <div className={classes.ctaWrap}>
          <LetsTalk className={classes.ctaCSS} />
        </div>
      </Modal>
    </header>
  );
};

export default Header;
