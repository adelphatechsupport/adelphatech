/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from '../assets/images/features/1.svg';
import icon2 from '../assets/images/features/2.svg';
import icon3 from '../assets/images/features/mobile-app.svg';
import icon4 from '../assets/images/features/4.svg';
import icon5 from '../assets/images/features/web-development.svg';
import icon6 from '../assets/images/features/6.svg';

const data = [
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'UI/UX Design & Build',
    description: ``,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Web',
    description: `Development`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Mobile App Development',
    description: ``,
  },
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Chatbots',
    description: `and AI`,
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'Digital',
    description: `Strategy`,
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: 'API / EDI Integrations',
    description: ``,
  },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Our Services"
          title="We are experts in the following areas"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#f3f6fe',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
      fontFamily: 'headingAlt',
    },
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
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
