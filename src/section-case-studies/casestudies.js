/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import support from '../assets/images/support.png';
import { LearnMore } from 'components/link';


const list = [
  'PROACTIVE HIRING MODEL',
  'EXPERIENCED SERVICE DELIVERY',
  'DIGITAL TRANSFORMATION',
  'HIGH QUALITY',
];

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      ImageWebhelp: file(relativePath: { eq: "webhelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageCbc: file(relativePath: { eq: "cbc.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageISS: file(relativePath: { eq: "iss.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageInstaSize: file(relativePath: { eq: "instasize.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG],quality: 70)
        }
      }
    }
  `);
  console.log("support", support);
  return (
    <Box as="section" id="CaseStudies" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Our Work"
          title="We help our partners succeed with high-quality websites."
          className="mb-5"
        />
        <Link
          to="/work-details"
        >
          <Image
            src={data.ImageWebhelp.childImageSharp.gatsbyImageData}
            loading="lazy"
            alt="Webhelp"
            class="rounded"
          />
        </Link>
        <div className='ps-5 ms-5 mb-5'>
          <Heading sx={styles.title}>
            Oviva Multisite – <br /> multilingual and market-<br />specific
          </Heading>
          <Text as="p" sx={styles.summary}>
            Launch of a multipage solution that automatically directs visitors to the <br /> appropriate market-specific website and language.
          </Text>
          <LearnMore
            path="/work-details"
            sx={{ mt: [3, null, null, 4] }}
            label={'Read More'}
          />
        </div>
        <Box sx={styles.grid} className='px-xl-5 px-lg-5 px-md-0 px-0 mx-lg-5 mx-xl-5 mx-md-0 mx-0 py-5 my-5'>
          <Box sx={styles.illustration}>
            <Image
              src={data.ImageCbc.childImageSharp.gatsbyImageData}
              loading="lazy"
              alt="CBC"
            />
          </Box>
          <Box sx={styles.content}>

            <Heading sx={styles.title}>
              Hy – Relaunch of a <br /> data-driven consulting <br /> agency
            </Heading>
            <Text as="p" sx={styles.summary}>
              Learn how we helped this top consulting group <br /> relaunch their website to attract new executive <br /> clients and high-quality candidates, with a<br /> custom-made, fast and easy-to-use website.
            </Text>
            <LearnMore
              path="/"
              sx={{ mt: [3, null, null, 4] }}
              label={'Read More'}
            />
          </Box>
        </Box>
        <Box sx={styles.grid} className='px-xl-5 px-lg-5 px-md-0 px-0 mx-lg-5 mx-xl-5 mx-md-0 mx-0 py-5 my-5'>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Finanzen.de – A Smooth<br /> Transition into a Brand<br /> New SEO Portal
            </Heading>
            <Text as="p" sx={styles.summary}>
              We helped Germany’s largest portal for finance-related topics migrate to a new website and reap the benefits of search engine optimization in the long term.
            </Text>
            <LearnMore
              path="/"
              sx={{ mt: [3, null, null, 4] }}
              label={'Read More'}
            />
          </Box>
          <Box sx={styles.illustration}>
            <Image
              src={data.ImageISS.childImageSharp.gatsbyImageData}
              loading="lazy"
              alt="ISS"
            />
          </Box>
        </Box>
        <Box sx={styles.grid} className='px-xl-5 px-lg-5 px-md-0 px-0 mx-lg-5 mx-xl-5 mx-md-0 mx-0 py-5 my-5'>
          <Box sx={styles.illustration}>
            <Image
              src={data.ImageInstaSize?.childImageSharp.gatsbyImageData}
              loading="lazy"
              alt="support"
            />
          </Box>
          <Box sx={styles.content}>

            <Heading sx={styles.title}>
              Toolkit Digitalisierung – <br /> Setting Up an Activist’s <br /> Database for Success
            </Heading>
            <Text as="p" sx={styles.summary}>
              We used our collective knowledge to help their new website perform, scale and have an uninterrupted user experience.
            </Text>
            <LearnMore
              path="/"
              sx={{ mt: [3, null, null, 4] }}
              label={'Read More'}
            />
          </Box>
        </Box>
      </Container>
    </Box >
  );
};

export default Work;

const styles = {
  section: {
    backgroundColor: '#f3f6fe',
    pt: [8, null, 12, 6, null, 15],
    pb: [null, null, null, 8, 0],
  },
  grid: {
    gap: [null, null, null, null, 12],
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, null, '470px 1fr', '1fr 549px'],
  },
  illustration: {
    textAlign: 'center',
    position: 'relative',
    mt: [2, null, null, 0, 4, 0],
    img: {
      maxWidth: ['100%', null, null, null, null, ''],
    },
  },
  content: {
    marginTop: [null, null, null, null, null, -16],
    maxWidth: [null, null, null, 420, 560, 'none'],
    margin: [null, null, null, '0 auto', 'unset'],
    textAlign: ['center', null, null, null, 'left'],
    mb: 4
  },
  title: {
    color: '#09386b',
    fontFamily: 'headingAlt',
    fontSize: [4, null, null, 8, null, null, 14],
    fontWeight: 500,
    lineHeight: [1.33, null, 1.4, 1.2],
    letterSpacing: ['-0.5px', null, null, '-1px'],
    mb: 3,
    mt: 6,
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontFamily: 'headingAlt',
    fontSize: ['13px', null, null, 2, '15px', 4],
    lineHeight: [1.86, null, null, null, 1.86, 1.5],
    m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
  },
  list: {
    gap: '0 18px',
    fontFamily: 'headingAlt',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 200px)'],
    justifyContent: [null, null, null, 'center', 'unset'],
    listStyle: 'none',
    display: 'block',
    mt: [4, null, null, 5, 4, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      fontWeight: 600,
      alignItems: 'center',
      color: 'textSecondary',
      fontFamily: 'headingAlt',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
