/** @jsx jsx */
import { Link } from 'gatsby';
import { useRef, useState } from 'react';
// import fetch from 'isomorphic-unfetch';
import { Box, Heading, Text, jsx } from 'theme-ui';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a status in state to handle the response from our API.
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const handleMailChimpResponse = (errorMsg, successMsg) => {
    if (errorMsg) {
      // 4. If there was an error, update the message in state.
      setStatus({
        info: { error: true, msg: errorMsg },
      });

      return;
    }

    // 5. Clear the input value and show a success message.
    setStatus({
      submitted: true,
      submitting: false,
      info: { error: false, msg: successMsg },
    });
    inputEl.current.value = '';
  };

  const handleSendGridResponse = (status, msg) => {
    if (status === 200) {
      // 5. Clear the input value and show a success message.
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      inputEl.current.value = '';
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  // const subscribe = async (e) => {
  //   e.preventDefault();
  //   setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

  //   // 3. Send a request to our API with the user's email address.
  //   const res = await fetch('/api/subscribe', {
  //     body: JSON.stringify({
  //       email: inputEl.current.value,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //   });
  //   //for mailChimp integration
  //   const { error } = await res.json();
  //   handleMailChimpResponse(
  //     error,
  //     'Success! 🎉 You are now subscribed to the newsletter.'
  //   );
  //   // For sendGrid integration
  //   const text = await res.text();
  //   handleSendGridResponse(res.status, text);
  // };
  return (
    <section>
      <div className='container-fluid px-0'>
        <Box sx={styles.contentBox} className='rounded-0'>
          <Box sx={styles.contentBoxInner}>
            <Heading as="h2" sx={styles.title}>
              READY TO GET STARTED?
            </Heading>
            <Text as="p" sx={styles.description}>
              Provide a brief description of your project and will team will contact you within 24 hours.
            </Text>
            <Link to="/contact-us" className='btn btn-light mt-3'>
              Contact Us
            </Link>
          </Box>
        </Box>
      </div>
    </section>
  );
}

const styles = {
  contentBox: {
    backgroundColor: '#14113e',
    textAlign: 'center',
    borderRadius: 10,
    py: ['60px', null, 8],
  },
  contentBoxInner: {
    width: ['100%', null, '540px', '600px'],
    mx: 'auto',
    mt: -1,
    px: [3, 5],
  },
  title: {
    fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
    color: 'white',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '700',
    letterSpacing: ['-.5px', null, '-1.5px'],
    mb: [2, 3],
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    color: 'white',
    lineHeight: [1.85, null, null, 2],
    px: [0, null, 5],
  },
  subscribeForm: {
    mt: [6, null, null, 7],
    backgroundColor: ['transparent', 'white'],
    borderRadius: [0, 50],
    overflow: 'hidden',
    p: [0, 1],
    flexDirection: ['column', 'row'],
    '[type="email"]': {
      border: 0,
      borderRadius: 50,
      fontFamily: 'body',
      fontSize: ['14px', null, 2],
      fontWeight: 500,
      color: 'heading',
      py: 1,
      px: [4, null, 6],
      backgroundColor: ['white', 'transparent'],
      height: ['52px', null, '60px'],
      textAlign: ['center', 'left'],
      '&:focus': {
        boxShadow: '0 0 0 0px',
      },
      '::placeholder': {
        color: '#14113e',
        opacity: 1,
      },
    },
    '.subscribe__btn': {
      flexShrink: 0,
      borderRadius: '45px',
      ml: [0, 2],
      backgroundColor: ['text', '#14113e'],
      color: ['#14113e', 'text'],
      mt: [2, 0],
      py: ['15px'],
    },
  },
};
