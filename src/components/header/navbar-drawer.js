/** @jsx jsx */
import { jsx, Box, Image, MenuButton } from 'theme-ui';
import React, { useContext } from 'react';
import { DrawerContext } from 'contexts/drawer/drawer-context';
import Drawer from 'components/drawer';
import Logo from 'components/logo';
import menuItems from './header.data';
import close from 'assets/images/icons/close.png';
import { Link as Href } from 'gatsby';

const NavbarDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="340px"
      placement="right"
      drawerHandler={
        <Box sx={styles.handler}>
          <MenuButton />
        </Box>
      }
      open={state?.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <button sx={styles.closeButton}>
          <Image src={close} alt="close"  loading="lazy"/>
        </button>
      }
      maskStyle={styles.mask}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Box sx={styles.wrapper}>
        <Logo sx={styles.logo} />
        <Box as="ul" sx={styles.navbar}>
          {menuItems.map(({ path, label }, i) => (
            <Box as="li" key={i}>
              <Href
                activeClass="active"
                className='text-dark text-decoration-none'
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {label}
              </Href>
            </Box>
          ))}
        </Box>
        <Href to="/contact-us" className='btn btn-primary' sx={styles.donateNow}>
          Get Started Now!
        </Href>
      </Box>
    </Drawer>
  );
};
export default NavbarDrawer;

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    cursor: 'pointer',
    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
    'path':{
      fill: "#46c4f8"
    },
  },
  drawer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    outline: 0,
  },
  mask: {
    opacity: 0.2,
  },
  close: {
    position: 'absolute',
    top: 35,
    right: 30,
    zIndex: '1',
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    p: 0,
  },
  wrapper: {
    height: '100%',
    paddingTop: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
  },
  logo: {
    ml: 6,
    mb: 9,
    mr: 12,
  },
  navbar: {
    listStyle: 'none',
    justifyContent: 'end',
    m: 0,
    p: 0,
    'li > a': {
      backgroundColor: 'transparent',
      borderTop: (t) => `1px solid ${t.colors.borderColor}`,
      display: 'flex',
      alignItems: 'center',
      color: 'heading',
      minHeight: 44,
      marginLeft: 6,
      position: 'relative',
      transition: 'all 0.3s ease-in-out 0s',
    },
    'li:last-child > a': {
      borderBottom: (t) => `1px solid ${t.colors.borderColor}`,
    },
    '.active': {
      color: 'primary',
    },
  },
  donateNow: {
    fontSize: 1,
    minHeight: 45,
    margin: 'auto 30px 40px',
  },
};
