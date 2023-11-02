/** @jsx jsx */
import Image from 'components/image';
import { LearnMore } from 'components/link';
import SectionHeading from 'components/section-heading';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Box, Container, Heading, Text, jsx } from 'theme-ui';


// const list = [
//   'PROACTIVE HIRING MODEL',
//   'EXPERIENCED SERVICE DELIVERY',
//   'DIGITAL TRANSFORMATION',
//   'HIGH QUALITY',
// ];

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      ImageWebhelp: file(relativePath: { eq: "studies/webhelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageCbc: file(relativePath: { eq: "studies/cbc.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageISS: file(relativePath: { eq: "studies/iss.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageInstaSize: file(relativePath: { eq: "studies/instasize.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageEmpower: file(relativePath: { eq: "studies/empower.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
    }
  `);
  return (
    <Box as="section" id="CaseStudies" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Our Work"
          title="We help our partners succeed with high-quality websites."
          className="mb-5"
        />
        <Link
          to="/webhelp-multilingual-hiring-portal"
        >
          <Image
            src={data.ImageWebhelp.childImageSharp.gatsbyImageData}
            loading="lazy"
            alt="Webhelp"
            className="rounded"
          />
        </Link>
        <div className='ps-xl-5 ps-lg-5 ps-md-3 ps-md-1 ms-xl-5 ms-lg-5 ms-md-3 ms-md-1 mb-5'>
          <Heading sx={styles.title}>
            Webhelp's Multinational < br /> Web Presence
          </Heading>
          <Text as="p" sx={styles.summary}>
            Implementation of a versatile web platform that seamlessly guides visitors <br /> to the most relevant market-specific website and language.
          </Text>
          <LearnMore
            path="/webhelp-multilingual-hiring-portal"
            sx={{ mt: [3, null, null, 4] }}
            label={'Read More'}
          />
        </div>
        <Box sx={styles.grid} className='px-xl-5 px-lg-5 px-md-0 px-0 mx-lg-5 mx-xl-5 mx-md-0 mx-0 py-xl-5 py-lg-5 py-md-3 py-1 mt-xl-5 mt-lg-5 mt-md-3 mt-1'>
          <Box sx={styles.illustration}>
            <Image
              src={data.ImageCbc.childImageSharp.gatsbyImageData}
              loading="lazy"
              alt="CBC"
              className="rounded"
            />
          </Box>
          <Box sx={styles.content}>

            <Heading sx={styles.title}>
              CBC – A Beacon of Canadian Broadcasting
            </Heading>
            <Text as="p" sx={styles.summary}>
              Explore how the CBC, Canada's national public broadcaster, has been a cornerstone of Canadian media, delivering news, entertainment, and culture to the nation for generations.
            </Text>

            <LearnMore
              path="/cbc-details"
              sx={{ mt: [3, null, null, 4] }}
              label={'Read More'}
            />
          </Box>
        </Box>
        <Box sx={styles.grid} className='px-xl-5 px-lg-5 px-md-0 px-0 mx-lg-5 mx-xl-5 mx-md-0 mx-0 py-xl-5 py-lg-5 py-md-3 py-1 mt-xl-5 mt-lg-5 mt-md-3 mt-1'>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              International Schools Services (ISS) – Transforming Global Education
            </Heading>
            <Text as="p" sx={styles.summary}>
              ISS has played a pivotal role in shaping global education by providing comprehensive services and support to international schools.
            </Text>

            <LearnMore
              path="/international-school-service-web-portal"
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
        <Box sx={styles.grid} className='px-xl-5 px-lg-5 px-md-0 px-0 mx-lg-5 mx-xl-5 mx-md-0 mx-0 py-xl-5 py-lg-5 py-md-3 py-1 mt-xl-5 mt-lg-5 mt-md-3 mt-1'>
          <Box sx={styles.illustration}>
            <Image
              src={data.ImageInstaSize?.childImageSharp.gatsbyImageData}
              loading="lazy"
              alt="support"
            />
          </Box>
          <Box sx={styles.content}>

            <Heading sx={styles.title}>
              Instasize – Empowering Visual Storytelling
            </Heading>
            <Text as="p" sx={styles.summary}>
              Discover how Instasize has revolutionized visual content creation, providing users with powerful tools and features for enhancing and sharing their visual stories.
            </Text>

            <LearnMore
              path="/instasize-details"
              sx={{ mt: [3, null, null, 4] }}
              label={'Read More'}
            />
          </Box>
        </Box>
        <Box sx={styles.grid} className='px-xl-5 px-lg-5 px-md-0 px-0 mx-lg-5 mx-xl-5 mx-md-0 mx-0 py-xl-5 py-lg-5 py-md-3 py-1 mt-xl-5 mt-lg-5 mt-md-3 mt-1'>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Empower - Data Logistics System
            </Heading>
            <Text as="p" sx={styles.summary}>
              We empower our partners to thrive with high-quality platforms that drive success.
            </Text>

            <LearnMore
              path="/empower-details"
              sx={{ mt: [3, null, null, 4] }}
              label={'Read More'}
            />
          </Box>
          <Box sx={styles.illustration}>
            <Image
              src={data.ImageEmpower.childImageSharp.gatsbyImageData}
              loading="lazy"
              alt="Empower"
              className="rounded"
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
      maxWidth: ['100%', null, null, null, null, '100%'],
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
    fontSize: ['15px', null, null, 2, '15px', 4],
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
