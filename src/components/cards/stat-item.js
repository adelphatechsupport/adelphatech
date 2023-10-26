/** @jsx jsx */
import { rgba } from 'polished';
import CountUp from 'react-countup';
import { jsx, Box, Text } from 'theme-ui';

const StatItem = ({ stat, isVisible }) => {
  return (
    <Box sx={styles.item}>
      <Text sx={styles.value}>
        {isVisible && <CountUp suffix={stat.suffix} end={stat.value}  />}
      </Text>
      <Text as="p" sx={styles.title}>
        {stat.title}
      </Text>
    </Box>
  );
};

export default StatItem;

const styles = {
  item: {
    textAlign: 'center',
  },
  value: {
    color: 'primary',
    fontSize: [7, null, null, 10, null, 18],
    display: 'flex',
    fontFamily: 'headingAlt',
    justifyContent: 'center',
    lineHeight: 1.38,
    letterSpacing: ['-0.5px', null, null, '-1px'],
  },
  title: {
    fontSize: [2, null, null, '15px', 5],
    lineHeight: 1.77,
    fontFamily: 'headingAlt',
    color: 'primary',
    mt: [1],
  },
};
