/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from 'theme-ui';
import { LearnMore } from 'components/link';
import Svg from "react-inlinesvg"

const ApproachCard = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box as="figure">
        <Image src={data?.icon} sx={styles.icon} alt={data?.title} />
        <Svg
          src={data?.icon} sx={styles.icon} title={data?.title}
          height="auto"
        />
      </Box>
      <Box>
        <Heading as="h4">{data?.title}</Heading>
        <Text as="p">{data?.description}</Text>
        {data?.path && <LearnMore path={data?.path} />}
      </Box>
    </Box>
  );
};

export default ApproachCard;

const styles = {
  feature: {
    borderBottom: (t) => [null, null, `0px solid ${t.colors.borderColor}`],
    borderRight: (t) => [null, null, `0px solid ${t.colors.borderColor}`],
    padding: [
      null,
      null,
      null,
      '45px 30px 55px',
      '40px 25px 50px 35px',
      '60px 45px 60px 50px',
    ],
    textAlign: ['center', null, null, null, null, 'center'],
    transition: '0.3s ease 0s',
    figure: {
      display: 'inline-flex',
      alignItems: 'center',
      minWidth: [70],
      mb: 10,

    },
    h4: {
      fontSize: 9,
      fontWeight: 500,
      lineHeight: 1.28,
      color: 'heading',
      marginBottom: 2,
    },
    p: {
      fontSize: [1, null, null, null, 2],
      lineHeight: 1.88,
      color: 'headingSecondary',
    },
    a: {
      mt: [2, null, null, null, 6],
    },
  },
};
