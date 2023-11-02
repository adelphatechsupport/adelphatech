/** @jsx jsx */
import { jsx, Box, Container, Heading } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import ApproachCard from 'components/cards/card-approach';

import icon1 from '../assets/images/approach/1.svg';
import icon2 from '../assets/images/approach/2.svg';
import icon3 from '../assets/images/approach/3.svg';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '',
    title: 'Analyze & Design',
    description: `In the initial phase of "Our Approach," we carefully assess your project needs. Drawing on over a decade of experience in web and mobile development, our experts create a blueprint aligned with your vision, setting the stage for success.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '',
    title: 'Build',
    description: `Following analysis and design, we bring your project to life with precision and expertise. Our extensive web and mobile development experience ensures that every line of code and pixel meet industry standards, delivering both functionality and aesthetics.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '',
    title: 'Test & Deploy',
    description: `In the final phase, we rigorously test and seamlessly deploy your project, ensuring top-notch quality and performance. With over a decade of experience, we guarantee your project's success from inception to execution.`,
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
          With over 10 years of experience  in web and mobile development,<br/> we’ve developed the ultimate approach to helping our clients and partners succeed.
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
    pt: [3, null, null, 12, null, 3],
    pb: [9, null, null, 12, 16, 10],
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
