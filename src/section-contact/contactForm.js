
import React, { createRef, useEffect, useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Box, Button, Container, Heading, Text } from "theme-ui";
import Recaptcha from "react-google-recaptcha";
import Swal from "sweetalert2";
import axios from 'axios';
const ContactForm = () => {

    const [buttonDisabled, setButtonDisabled] = React.useState(true)
    const [isLoading, setLoading] = React.useState(false)
    const [validated, setValidated] = useState(false);

    const recaptchaRef = createRef();

    const handleRecaptchaVerify = async (recaptchaToken) => {
        try {
            const response = await axios.post('/.netlify/functions/verifyRecaptcha', {
                token: recaptchaToken,
            });

            if (response.data.success) {
                // reCAPTCHA verification successful
                setButtonDisabled(false); // Enable the form submission button
            }
        } catch (error) {
            // Handle errors
            console.error(error);
        }
    };
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonDisabled(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhdGFoaXJAYWRlbHBoYXRlY2guY2EiLCJqdGkiOiJkMjhmY2E3Ny1jY2JjLTQ3MGItYWQ1MS1eYTY0NDc1NDUzYjIiLCJlbWFpbCI6ImF0YWhpckBhZGVscGhhdGVjaC5jb20iLCJ1aWQiOiJjNGZiZTcxNy1jYz12LTQwNDQtYWIxOC0wYmY5MjQxYWNiZTUiLCJyb2xlcyI6IlN1cGVyIEFkbWluIiwiZXhwIjoxNjk3MzE1Mzk0LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.mbkPm4miavHCC00LNNiM6DnDWqMVdR8A4uxh7tJoiVM");

        const formdata = new FormData();
        formdata.append("FirstName", formData.FirstName);
        formdata.append("LastName", formData.LastName);
        formdata.append("Email", formData.Email);
        formdata.append("Message", formData.Message);
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        };
        setLoading(true);
        setValidated(true);
        const recaptchaValue = recaptchaRef.current.getValue()
        try {
            const response = await fetch("https://api.deliveryease.co/api/Generic/Form/ATFile", requestOptions);
            if (response.ok) {
                console.log('Form submitted successfully');
                // Handle success, e.g., show a success message to the user
                setFormData({
                    FirstName: '',
                    LastName: '',
                    Email: '',
                    Message: '',
                    Project: '',
                    file: null,
                });
                Swal.fire('Success', 'Form submitted successfully', 'success');
                setLoading(false);
            } else {
                console.error('Form submission failed:', response.status);
                // Handle the error, e.g., show an error message to the user
                Swal.fire('Error', 'Form submission failed', 'error');
            }
        } catch (error) {
            console.error('Form submission failed:', error);
            // Handle the error, e.g., show an error message to the user
            Swal.fire('Error', 'Form submission failed', 'error');
            setLoading(false);
        } finally {
            // Re-enable the submit button after submission is complete
            setButtonDisabled(false);
        }
    };
    return (
        <Box as="section" id="Contactform" sx={styles.section}>
            <Container>
                <Heading sx={styles.title}>
                    Send us a message!
                </Heading>
                <Text as="p" sx={styles.summary}>
                    Fill out the contact form or send an email to <a href='mailto:hello@adelphatech.com' className='text-decoration-none' sx={styles.email}>hello@adelphatech.com</a>
                </Text>
                <Box sx={styles.grid} >
                    <Col xl="9" lg="9" md="11" className='mx-auto py-5'>
                        <form validated={validated} onSubmit={handleSubmit} method="post"
                            data-netlify-recaptcha="true"
                            data-netlify="true"
                            name="message"
                            data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="message" />

                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="FNAME">
                                    <FloatingLabel
                                        controlId="floatingInputFName"
                                        label="FIRST NAME*"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            name="FirstName"
                                            value={formData.FirstName}
                                            onChange={handleInputChange}
                                            placeholder="First Name"
                                            required
                                        />
                                    </FloatingLabel>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="LNAME">
                                    <FloatingLabel
                                        controlId="floatingInputLName"
                                        label="LAST NAME*"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            name="LastName"
                                            value={formData.LastName}
                                            onChange={handleInputChange}
                                            placeholder="Last Name"
                                            required />
                                    </FloatingLabel>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom04">
                                    <FloatingLabel
                                        controlId="floatingInputEmail"
                                        label="E-MAIL*"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="email"
                                            name="Email"
                                            value={formData.Email}
                                            onChange={handleInputChange}
                                            placeholder="Email"
                                            required />
                                    </FloatingLabel>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-4">
                                <Form.Group controlId="validationBreif">
                                    <FloatingLabel controlId="floatingTextarea2" label="Project Brief*">
                                        <Form.Control
                                            as="textarea"
                                            name="Message"
                                            value={formData.Message}
                                            onChange={handleInputChange}
                                            placeholder="Message"
                                            style={{ height: '100px' }}
                                            required
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>
                            <Row className='mb-5'>
                                <Recaptcha
                                    ref={recaptchaRef}
                                    sitekey="6LdwPXYbAAAAAMgj5Nqj76lv39oKQB5Jtj48_9N9"
                                    size="normal"
                                    id="recaptcha-google"
                                    onChange={(recaptchaToken) => handleRecaptchaVerify(recaptchaToken)}
                                />
                            </Row>
                            {!isLoading && <Button
                                type="submit"
                                className='buttonform'

                            >
                                Send Message
                            </Button>
                            }
                            {isLoading && <Button
                                type="submit"
                                className="text-white border-white p-3"
                                disabled={buttonDisabled}
                            ><i className="fa fa-spinner fa-spin"></i>
                                Sending...
                            </Button>
                            }
                        </form>
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