/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from 'theme-ui';
import { LearnMore } from 'components/link';

const Feature = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box as="figure">
        <Image src={data?.icon} sx={styles.icon} alt={data?.title} />
      </Box>
      <Box>
        <Heading as="h4">{data?.title}</Heading>
        <Text as="p">{data?.description}</Text>
        {/* {data?.path && <LearnMore path={data?.path} />} */}
      </Box>
    </Box>
  );
};

export default Feature;

const styles = {
  feature: {
    borderBottom: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderRight: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    padding: [
      null,
      null,
      null,
      '45px 30px 55px',
      '40px 25px 50px 35px',
      '60px 45px 60px 50px',
    ],
    textAlign: ['center', null, null, null, null, 'left'],
    transition: '0.3s ease 0s',
    '@media only screen and (min-width:768px)': {
      ':hover': {
        backgroundColor: 'white',
        borderColor: 'white',
        boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.05)',
        transform: 'translate(-1px, -1px)',
      },
    },
    figure: {
      display: 'inline-flex',
      alignItems: 'center',
      minWidth: [70],
      mb: 0,
      'img': {
        width: ["100%", '50%'],
      },
    },
    h4: {
      fontSize: 9,
      fontWeight: 500,
      lineHeight: 1.28,
      color: 'heading',
      marginBottom: 0,
    },
    p: {
      fontSize: 9,
      color: 'headingSecondary',
    },
    a: {
      mt: [2, null, null, null, 6],
    },
  },
};
