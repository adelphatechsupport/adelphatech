/** @jsx jsx */
import Image from 'components/image-about';
import Modal, { CloseButton } from 'components/modal/modal';
import ResponsiveIframe from 'components/responsive-iframe';
import { graphql, useStaticQuery } from 'gatsby';
import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  jsx
} from 'theme-ui';
import paint1 from '../assets/images/paint1.svg';
const VideoIntro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "video-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box as="section" id="about" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.videoWrapper}>
            <Modal isOpen={isOpen}>
              <CloseButton
                onClick={() => setIsOpen(false)}
                size="24px"
                color="#fff" 
              />
              <ResponsiveIframe
                src="https://www.youtube.com/embed/OzztBkwLNe0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </Modal>

            <Image
              src={data.illustration?.childImageSharp.fluid}
              className="video-banner"
              width="795"
              height="557"
              alt="video banner"
              loading="lazy"
            />
            {/* <Button
              variant="text"
              sx={styles.playPause}
              onClick={() => setIsOpen(true)}
            >
              <Img width="22" height="22" src={play} alt="play" /> Watch Full
              video
            </Button> */}
          </Box>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              <span sx={{ background: `url(${paint1})` }}>AdelphaTech</span>
              A top-performing agency
            </Heading>
            <Text as="p" sx={styles.summary}>
              We’re a team of passionate problem-solvers and out-of-the-box technical thinkers. We want to take as much complexity off of your plate and make your website or mobile app perform for your business
            </Text>

          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoIntro;

const styles = {
  section: {
    backgroundColor: "#fff",
    pt: [7, null, null, 6, null, null, 13],
    pb: [0, null, null, 8, null, null, 11],
  },
  grid: {
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    gap: '0 30px',
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr',
      '1fr 1fr',
      '600px 1fr',
      '760px 1fr',
    ],
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    mt: [2, null, null, 0, 4, 0],
    '.video-banner': {
      maxWidth: ['100%', null, null, null, null, '100%'],
    },
  },
  content: {
    px: [null, null, null, 8, 0],
  },
  playPause: {
    color: 'white',
    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, null, null, 70, 100],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0,
    },
    img: {
      mr: '16px',
    },
  },
  title: {
    color: 'heading',
    fontWeight: 500,
    fontSize: [5, null, null, 10, null, 11],
    lineHeight: 1.53,
    letterSpacing: ['-0.5px', null, null, '-1px'],
    textAlign: ['center', null, null, 'left'],
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontFamily: 'headingAlt',
    fontSize: ["15px", null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    mt: [4, null, null, 5, 3, 5],
    maxWidth: 470,
    textAlign: ['center', null, null, 'left'],
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 180px)'],
    listStyle: 'none',
    mt: [4, null, null, 5, 3, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
