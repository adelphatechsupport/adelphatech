/** @jsx jsx */
import { Link } from 'gatsby';
import { Flex, jsx, } from 'theme-ui';
const SubscriptionForm = ({ buttonLabel, ...props }) => {
  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Link to="/case-studies" className='rounded-0 hbtn slide_right'>{buttonLabel ?? 'SEE THE PROOF'}</Link>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
    },
    button: {
      ml: [3],
    },
  },
};
