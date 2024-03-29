/** @jsx jsx */
import SubscriptionForm from 'components/subscription-form';
import { rgba } from 'polished';
import { Box, Container, Heading, Image, Text, jsx } from 'theme-ui';
import video from "../assets/images/adelphatech-vid.mp4"
import banner from "../assets/images/banner.jpg"
import { useEffect, useState } from 'react';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) { // You can adjust this value as needed for your mobile breakpoint
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Box as="section" id="home" className='bg-home' sx={styles.section}>
      <Container>
        {isMobile ? (
          // Render the mobile content
          <div className="hero-video d-block d-md-none">
            <div className="d-block d-md-none" sx={styles.bannerIm}>
              <Image src={banner} alt="ima" loading="lazy" />
            </div>
          </div>
        ) : (
          // Render the non-mobile content
          <div className="hero-video d-none d-md-block video-bg" id="BgVideoContainer">
            <div className="d-none d-md-block video-bg">
              <video autoPlay muted loop className="d-none d-md-block video-bg">
                <source src={video} type="video/mp4" className="d-none d-md-block video-bg" />
              </video>
            </div>
          </div>
        )}
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1" className='mb-4'>
              Bringing <br />
              projects to <span className='display-4 fw-bolder'>Life</span>
            </Heading>
            <Text as="h5" sx={styles.summary} className='text-white lh-lg'>
              For over 10+ years, clients have trusted us in supporting their software development needs at super
              competitive rates. We are experts in a variety of skillsets from ai, web, cloud, mobile and desktop
              technologies. Take a look at some of our delivered projects, for companies small, medium and large.
            </Text>
            <SubscriptionForm sx={styles.subscriptionForm} />
          </Box>
          <Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor: `transparent`,
    pt: [18, null, null, 17, null, null, 0],
    pb: [12, null, null, 12, 7, 11, 0],
  },
  bannerIm: {
    img: {
      maxWidth: 'fit-content',
    }
  },
  contentWrapper: {
    gap: [null, null, null, null, 8, 15],
    display: ['block', null, null, null, 'grid'],
    alignItems: 'center',
    gridTemplateColumns: [null, null, null, null, '1fr 1fr', '530px 1fr'],
    minHeight: ['auto', null, null, null, '42vh', '81vh', '80vh'],
    pt: [null, null, null, 50, 0, null],
    '@media only screen and (min-width:1501px) and (max-width:1600px)': {
      pt: 14,
    },
  },
  bannerContent: {
    maxWidth: [null, null, 450, '600px', null, 'none'],
    m: [null, null, '0 auto', null, 0],
    textAlign: ['left', null, null, null, 'left'],
    h1: {
      fontFamily: 'headingAlt',
      fontSize: [9, null, null, 10, 12, 45, 16],
      lineHeight: [1.31, null, null, 1.5, null, 1.26],
      letterSpacing: [0, null, null, null, '9px'],
      color: '#fff',
    },
    p: {
      fontSize: ['13px', null, null, 2, 3],
      lineHeight: [1.87, null, null, 2, null, 2.33],
      color: '#fff',
      maxWidth: [null, null, 370, 470],
      m: ['20px auto 0', null, null, null, '25px auto 0'],
    },
  },
  subscriptionForm: {
    maxWidth: [null, null, null, 470, 'none'],
    m: ['30px 0 0', null, null, '30px auto', '35px 0 0'],
    input: {
      backgroundColor: '#FFFFFF',
      border: '0 none',
      fontFamily: 'body',
      fontSize: [1, null, null, null, 2],
      px: [3, null, null, 5],
      boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',
      minHeight: [40, 50, null, null, null, 60],
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      '::placeholder': {
        color: rgba('#02073E', 0.4),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [0, 1, null, null, 2],
      minHeight: [40, 50, null, null, null, 50],
      px: ['18px', null, null, null, 6],
      border: "1px solid #0096dd !important",
      ':hover': {
        backgroundColor: "#0096dd !important"
      },
    },
  },
  sponsoredBy: {
    alignItems: 'center',
    justifyContent: ['center', null, null, 'flex-start'],
    maxWidth: [null, null, null, 470, 'none'],
    m: ['30px 0 0', null, null, '30px auto', '35px 0 0'],
    span: {
      fontSize: ['13px', null, null, null, 2],
      lineHeight: 2.62,
      color: rgba('#566272', 0.6),
    },
  },
  sponsor: {
    alignItems: 'center',
    figure: {
      ml: [2, null, null, null, 4, 5],
      img: {
        maxWidth: ['60px', null, null, null, '80px', '343px'],
      },
    },
  },
};
