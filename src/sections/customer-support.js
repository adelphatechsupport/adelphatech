/** @jsx jsx */
import Image from 'components/image';
import SectionHeading from 'components/section-heading';
import { graphql, useStaticQuery } from 'gatsby';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { Box, Container, Grid, Heading, Text, jsx } from 'theme-ui';

const list = [
  'Experienced Service Delivery',
  'Uncompromising Code and Design Quality',
  'Championing Digital Transformation',
];

const CustomerSupport = () => {
  const data = useStaticQuery(graphql`
    query {
      support: file(relativePath: { eq: "support.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
    }
  `);
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.illustration}>
            <Image
              src={data.support.childImageSharp.gatsbyImageData}
              loading="lazy"
              alt="support"
            />
          </Box>
          <Box sx={styles.content}>
            <SectionHeading
              slogan="Meet AdelphaTech"
              className="text-xl-start text-lg-start"
            />
            <Heading sx={styles.title}>
              A top-performing agency
            </Heading>
            <Text as="p" sx={styles.summary}>
              We're a dynamic team of passionate problem-solvers and innovative technical thinkers. Our mission is to simplify your digital transformation journey and empower your website or mobile app to drive real business results.
            </Text>

            <Grid sx={styles.list} as="ul">
              {list.map((item, i) => (
                <Text as="li" key={i}>
                  <IoIosCheckmarkCircle
                    sx={{ color: 'primary', mr: 2 }}
                    size="20px"
                  />
                  {item}
                </Text>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerSupport;

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
      maxWidth: ['100%', null, null, null, null, '80%'],
      height: '80% !important',
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
    fontSize: ['15px', null, null, 2, '15px', 2],
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
      fontSize: ["15px", 1, null, 2, '15px', 2],
      fontWeight: 600,
      alignItems: 'center',
      color: 'textSecondary',
      fontFamily: 'headingAlt',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
