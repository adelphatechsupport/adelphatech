/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import support from '../assets/images/support.png';

const list = [
  'PROACTIVE HIRING MODEL',
  'EXPERIENCED SERVICE DELIVERY',
  'DIGITAL TRANSFORMATION',
  'HIGH QUALITY',
];

const StoryPage = () => {
  const data = useStaticQuery(graphql`
    query {
      support: file(relativePath: { eq: "aboutus.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      about: file(relativePath: { eq: "Adeplphalabs.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      adelphalabs: file(relativePath: { eq: "meet.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
    }
  `);
  console.log("support",support);
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="OUR STORY"
          title="Frequently asked question"
          className="mb-5"
        />
        <Box sx={styles.grid} className='px-xl-5 px-lg-5 px-md-0 px-0 mx-lg-5 mx-xl-5 mx-md-0 mx-0'>
          <Box sx={styles.illustration}>
            <Image
              src={data.support.childImageSharp.gatsbyImageData}
              loading="lazy"
              alt="support"
            />
          </Box>
          <Box sx={styles.content}>

            <Heading sx={styles.title}>
              Technical experts, following technologies
            </Heading>
            <Text as="p" sx={styles.summary}>
              AdelphaTech is a technology consulting and digital solutions company that specializes in software development, data management, and digital transformation. Their services include custom software development, web and mobile app development, cloud migration, and data analytics.
            </Text>
          </Box>
        </Box>
        <Box sx={styles.grid} className='px-xl-5 px-lg-5 px-md-0 px-0 mx-lg-5 mx-xl-5 mx-md-0 mx-0'>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Proactive and focused on solutions
            </Heading>
            <Text as="p" sx={styles.summary}>
              It is important for us to understand the goals of our partners to deliver the highest quality of an end result. For this purpose, we specifically assemble a team of project manager, developer and consultant, who take care of the development, management and optimization of the website.
            </Text>
          </Box>
          <Box sx={styles.illustration}>
            <Image
              src={data.about?.childImageSharp.gatsbyImageData}
              loading="lazy"
              alt="support"
            />
          </Box>
        </Box>
        <Box sx={styles.grid} className='px-xl-5 px-lg-5 px-md-0 px-0 mx-lg-5 mx-xl-5 mx-md-0 mx-0'>
          <Box sx={styles.illustration}>
            <Image
              src={data.adelphalabs?.childImageSharp.gatsbyImageData}
              loading="lazy"
              alt="support"
            />
          </Box>
          <Box sx={styles.content}>

            <Heading sx={styles.title}>
              ADELPHA LABS
            </Heading>
            <Text as="p" sx={styles.summary}>
              Rapid Prototyping, Minimum Viable Product (MVP), Lean Methodology, Market Validation & Research, Product Development & Strategy
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StoryPage;

const styles = {
  section: {
    backgroundColor: '#f3f6fe',
    pt: [8, null, 12, 6, null, 15],
    pb: [null, null, null, 8, 0],
  },
  grid: {
    gap: [null, null, null, null, 2],
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
      maxWidth: ['100%', null, null, null, null, '480px'],
      height: '80% !important',
      borderRadius: "5px"
    },
  },
  content: {
    marginTop: [null, null, null, null, null, -16],
    maxWidth: [null, null, null, 420, 560, 'none'],
    margin: [null, null, null, '0 auto', 'unset'],
    textAlign: ['center', null, null, null, 'left'],
  },
  title: {
    color: 'heading',
    fontFamily: 'headingAlt',
    fontSize: [4, null, null, 8, null, null, 11],
    fontWeight: 500,
    lineHeight: [1.33, null, 1.4, 1.53],
    letterSpacing: ['-0.5px', null, null, '-1px'],
    mb: 3,
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontFamily: 'headingAlt',
    fontSize: ['13px', null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 470,
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
