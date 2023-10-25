
import { useFormik } from "formik";
import React, { createRef, useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Recaptcha from "react-google-recaptcha";
import Swal from "sweetalert2";
import { Box, Button, Container, Heading, Text } from "theme-ui";
import * as Yup from 'yup';

const ContactForm = () => {

    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const [validated, setValidated] = useState(false);
    const recaptchaRef = createRef();

    const Schema = Yup.object().shape({
        FirstName: Yup.string().required('First Name is required'),
        LastName: Yup.string().required('Last Name is required'),
        Email: Yup.string().email('Invalid email address').required('Email is required'),
        Message: Yup.string().required('Message is required'),

    });

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

    const handleSubmit = async () => {
        setButtonDisabled(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhdGFoaXJAYWRlbHBoYXRlY2guY2EiLCJqdGkiOiJkMjhmY2E3Ny1jY2JjLTQ3MGItYWQ1MS1eYTY0NDc1NDUzYjIiLCJlbWFpbCI6ImF0YWhpckBhZGVscGhhdGVjaC5jb20iLCJ1aWQiOiJjNGZiZTcxNy1jYz12LTQwNDQtYWIxOC0wYmY5MjQxYWNiZTUiLCJyb2xlcyI6IlN1cGVyIEFkbWluIiwiZXhwIjoxNjk3MzE1Mzk0LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.mbkPm4miavHCC00LNNiM6DnDWqMVdR8A4uxh7tJoiVM");

        const recaptchaValue = recaptchaRef.current.getValue();
        if (!recaptchaValue) {
            // Handle Recaptcha validation error, e.g., show an error message to the user
            console.error('Recaptcha validation failed');
            Swal.fire('Error', 'Recaptcha validation failed', 'error');
            setButtonDisabled(false);
            setLoading(false);
            return;
        }

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

        try {
            const response = await fetch("https://api.deliveryease.co/api/Generic/Form/ATFile", requestOptions);
            if (response.ok) {
                console.log('Form submitted successfully');
                // Handle success, e.g., show a success message to the user
                setFormData({
                    FirstName: '',
                    LastName: '',
                    Email:'',
                    Message:'',
                    recaptchaValue:'',
                });
                Swal.fire('Success', 'Thank you for contacting us. Our team will contact you within 24 hours.', 'success');
                setButtonDisabled(false);
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
            setButtonDisabled(false);
            setLoading(false);
        } finally {
            // Re-enable the submit button after submission is complete
            setButtonDisabled(false);
            setLoading(false);
        }
    };
    const formik = useFormik({
        initialValues: {
            FirstName: '',
            LastName: '',
            Email: '',
            Message: '',
        },
        validationSchema: Schema,
        onSubmit: () => {
            handleSubmit()
        },
    });
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
                        <form validated={validated.toString()} onSubmit={handleSubmit} method="post"
                            data-netlify-recaptcha="true"
                            data-netlify="true"
                            name="message"
                            data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="message" />

                            <Row className="mb-3">
                                <Form.Group as={Col} md="6">
                                    <FloatingLabel
                                        label="FIRST NAME*"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            name="FirstName"
                                            value={formData.FirstName}
                                            onChange={(e) => {
                                                handleInputChange(e);
                                                formik.setFieldValue('FirstName', e.target.value);
                                            }}
                                            placeholder="First Name"
                                            required
                                        />
                                        <div className="text-danger">
                                            {formik.touched.FirstName && formik.errors.FirstName ? (
                                                <div>{formik.errors.FirstName}</div>
                                            ) : null}
                                        </div>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <FloatingLabel
                                        label="LAST NAME*"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            name="LastName"
                                            value={formData.LastName}
                                            onChange={(e) => {
                                                handleInputChange(e);
                                                formik.setFieldValue('LastName', e.target.value);
                                            }}
                                            placeholder="Last Name"
                                            required />
                                        <div className="text-danger">
                                            {formik.touched.LastName && formik.errors.LastName ? (
                                                <div>{formik.errors.LastName}</div>
                                            ) : null}
                                        </div>
                                    </FloatingLabel>

                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12">
                                    <FloatingLabel
                                        label="E-MAIL*"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="email"
                                            name="Email"
                                            value={formData.Email}
                                            onChange={(e) => {
                                                handleInputChange(e);
                                                formik.setFieldValue('Email', e.target.value);
                                            }}
                                            placeholder="Email"
                                            required />
                                        <div className="text-danger">
                                            {formik.touched.Email && formik.errors.Email ? (
                                                <div>{formik.errors.Email}</div>
                                            ) : null}
                                        </div>
                                    </FloatingLabel>

                                </Form.Group>
                            </Row>
                            <Row className="mb-4">
                                <Form.Group>
                                    <FloatingLabel label="Project Brief*">
                                        <Form.Control
                                            as="textarea"
                                            name="Message"
                                            value={formData.Message}
                                            onChange={(e) => {
                                                handleInputChange(e);
                                                formik.setFieldValue('Message', e.target.value);
                                            }}
                                            placeholder="Message"
                                            style={{ height: '100px' }}
                                            required
                                        />
                                        <div className="text-danger">
                                            {formik.touched.Message && formik.errors.Message ? (
                                                <div>{formik.errors.Message}</div>
                                            ) : null}
                                        </div>
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>
                            <Row className='mb-5'>
                                <Recaptcha
                                    ref={recaptchaRef}
                                    sitekey="6LcoY68oAAAAAFbV3A_HqwnREdMqy6Wx3RpGFvCe"
                                    onChange={handleInputChange}
                                    name="reCaptcha"
                                />
                            </Row>
                            {!isLoading && <Button
                                type="button"
                                className='buttonform'
                                onClick={formik.handleSubmit}

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