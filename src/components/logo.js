/** @jsx jsx */
import { useState, useEffect } from "react";
import { Image, jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoHeader from '../assets/images/logoheader.png';
import LogoWhite from '../assets/images/logowhite.png'

export default function Logo(props) {
  
  const [isSticky, setIsSticky] = useState(false);
  const [pathName, setPathName] = useState("");

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setIsSticky(scrollPosition > 0);
  };

  useEffect(() => {
    try { setPathName(window.location.pathname); } catch (r) { }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link path="/" className="text-decoration-none" sx={styles.logo} {...props}>
      <Image
        src={isSticky && (pathName !== "/" || pathName !== "") ? LogoHeader : (pathName === "/" || pathName === "") ? LogoWhite : LogoHeader}
        alt={isSticky ? 'Logo' : 'White Logo'}
      />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    border:"0 !important",
    img: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
