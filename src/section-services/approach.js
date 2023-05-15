/** @jsx jsx */
import icon2 from 'assets/images/Approach/Business.svg';
import icon1 from 'assets/images/Approach/Component.svg';
import icon3 from 'assets/images/Approach/Transparent.svg';
import ApproachCard from 'components/cards/card-approach';
import SectionHeading from 'components/section-heading';
import { Box, Container, Heading, jsx } from 'theme-ui';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '',
    title: 'Component-Based',
    description: `Our modular approach to development means we’re able to easily extend and adjust your website in the future.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '',
    title: 'Business-Friendly',
    description: `Our websites are built to perform – just like your business.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '',
    title: 'Transparent and Responsive',
    description: `From detailed project breakdowns to our responsive support staff, we make sure that you are always well informed.`,
  },
];

const Approach = () => {
  return (
    <section id="approach" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Our Approach"
        />
        <Heading sx={styles.title}>
          With over ten years of experience in Adelphatech development,<br/> we’ve developed the ultimate approach to help our business partners win.
        </Heading>
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <ApproachCard className="feature-item align-items-center" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Approach;

const styles = {
  section: {
    backgroundColor: '#fff',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 0, 0],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
      fontFamily: 'headingAlt',
    },
  },
  title: {
    color: 'heading',
    fontWeight: 700,
    fontSize: [5, null, null, 10, null, 6],
    lineHeight: 1.2,
    letterSpacing: ['-0.5px', null, null, '1px'],
    textAlign: ['center', null, null, 'center'],
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
    mb:12,
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    fontFamily: 'headingAlt',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `0px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `0px solid ${t.colors.borderColor}`],
  },
};
