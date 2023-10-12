/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import TrackVisibility from 'react-on-screen';
import StatItem from 'components/cards/stat-item';

const data = {
  stats: [
    {
      id: 1,
      value: 275,
      suffix: '+',
      title: 'Projects achieved',
    },
    {
      id: 2,
      value: 100,
      suffix: '+',
      title: 'Clients satisfied',
    },
    {
      id: 3,
      value: 92,
      suffix: '%',
      title: 'Client satisfaction',
    },
  ],
};
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <Grid sx={styles.statsGrid}>
          {data.stats.map((stat) => (
            <TrackVisibility key={stat.id} once>
              <StatItem stat={stat} />
            </TrackVisibility>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor:"#fff",
    pt: [8, null, null, 8, 10, null, 0],
    pb: [7, null, null, null, 10, null, 14],
  },
  statsGrid: {
    gap: [6, null, null, '60px 30px', '60px 80px', '60px 110px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 120px)',
      null,
      null,
      'repeat(3, 200px)',
      'repeat(3, 200px)',
    ],
    mt: [0],
  },
};
