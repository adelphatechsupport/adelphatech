/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import { useEffect, useState } from 'react';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import Logo from 'components/logo';
import { Link } from "gatsby"
import menuItems from './header.data';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [pathName, setPathName] = useState("");
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
  };
  useEffect(() => {
    try { setPathName(window.location.pathname); } catch (r) { }
    window.addEventListener('scroll', handleScroll, { passive: true });
    function handleScroll() {
      setIsSticky(window.pageYOffset > 0);
      console.log("window.pageYOffset", window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navColor = isSticky && (pathName !== "/" || pathName !== "") ? '#09386b' : (pathName === "/" || pathName === "") ? '#fff' : '#09386b';
  return (
    <DrawerProvider>
      <Sticky
        enabled={true}
        top={0}
        activeClass="is-sticky"
        innerZ={100}
        onStateChange={handleStateChange}
      >
        <header
          sx={styles.header}
          className={state.isSticky ? 'is-sticky' : ''}
        >
          <Container sx={styles.container}>
            <Logo sx={styles.logo} />
            <nav as="nav" sx={{ ...styles.navbar, color: navColor }} className={'navbar'}>
              {menuItems.map(({ path, label }, i) => (
                <Link to={"/" + path} className="nav-item"
                  activeClassName="active">{label}</Link>
              ))}
            </nav>
            <NavbarDrawer />
          </Container>
        </header>
      </Sticky>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    backgroundColor: 'transparent',
    position: 'fixed',
    left: 0,
    right: 0,
    py: [7],
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-sticky': {
      backgroundColor: 'white',
      boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.05)',
      py: [3],
      a: {
        color: "#09386b",
        borderBottom: '1px solid transparent',
        ':hover': {
          transition: 'color 0.3s ease 0s, background 0s ease 0.3s',
          borderBottom: '1px solid #09386b',
          color: "#09386b",
        },

      },
      '.active': {
        color: 'primary',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // position: ['relative', null, null, 'static'],
  },
  logo: {
    mr: [null, null, null, null, 30, 12],
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 1,
    // justifyContent: 'center',
    a: {
      cursor: 'pointer',
      display: ['flex'],
      color: '#09386b',
      fontWeight: 700,
      fontSize: [1, 4],
      padding: 0,
      borderBottom: '1px solid transparent',
      transition: 'all 0.3s ease-in-out 0s',
      '+ a': {
        ml: 7,
      },
      ':hover': {
        transition: 'color 0.3s ease 0s, background 0s ease 0.3s',
        borderBottom: '1px solid #09386b',
        color: "#09386b",
      },
    },
    '.not-sticky': {
      color: '#fff',
      ':hover': {
        transition: 'color 0.3s ease 0s, background 0s ease 0.3s',
        borderBottom: '1px solid #fff',
        color: "#fff",
      },
    },
    '.active': {
      color: 'primary',
    },
  },
};
