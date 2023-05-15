
import React, { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Box, Button, Container, Heading, Text } from "theme-ui";
import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
    function onChange(value) {
    }
    const recaptchaRef = React.createRef();
    const [validated, setValidated] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }
        setValidated(true);
         const recaptchaValue = recaptchaRef.current.getValue();
        const formData = new FormData(form);
        formData.append('recaptchaToken', recaptchaValue);
        const requestOptions = {
          method: 'POST',
          body: formData,
        };
        fetch('https://api.deliveryease.co/api/Generic/Form/AT', requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
    return (
        <Box as="section" id="Contactform" sx={styles.section}>
            <Container>
                <Heading sx={styles.title}>
                    Send us a message!
                </Heading>
                <Text as="p" sx={styles.summary}>
                    Fill out the contact form or send an email to <a href='mailto:support@adelphatech.com' className='text-decoration-none' sx={styles.email}>Support@adelphatech.com</a>
                </Text>
                <Box sx={styles.grid} >
                    <Col xl="9" lg="9" md="11" className='mx-auto py-5'>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" className="mb-3">
                                    <FloatingLabel controlId="floatingSelect" label="TOPIC*">
                                        <Form.Select aria-label="Floating label select example" required>
                                            <option>Website Lanch / Relaunch</option>
                                            <option value="1">Web Improvement</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="NAME">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="NAME*"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Your Name" required />
                                    </FloatingLabel>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom04">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="E-MAIL*"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="Your E-mail" required />
                                    </FloatingLabel>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-4">
                                <Form.Group controlId="validationCustom04">
                                    <FloatingLabel controlId="floatingTextarea2" label="Message*">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Your Message"
                                            style={{ height: '100px' }}
                                            required
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>
                            <Row className='mb-5'>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey="6LdwPXYbAAAAAMgj5Nqj76lv39oKQB5Jtj48_9N9"
                                    onChange={onChange}
                                />
                            </Row>
                            <Button type="submit" className='buttonform' >Send your message</Button>
                        </Form>
                    </Col>
                </Box>
            </Container>
        </Box>
    )
};
export default ContactForm;

const styles = {
    section: {
        backgroundColor: `#f3f6fe`,
        pt: [18, null, null, 17, null, null, 100],
        pb: [12, null, null, 12, 7, 11, 0],
    },
    title: {
        color: '#09386b',
        fontFamily: 'headingAlt',
        fontSize: [4, null, null, 8, null, null, 15],
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
        fontSize: ['13px', null, null, 2, '15px', 4],
        lineHeight: [1.86, null, null, null, 1.86, 2.25],
        m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
    },
    email: {
        color: '#09386b',

    },
}