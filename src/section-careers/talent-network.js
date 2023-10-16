/** @jsx jsx */
import { Box, Button, Container, Heading, Text, jsx } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';
import axios from 'axios';
import Swal from 'sweetalert2';

const TalentNetwork = () => {
    const [isLoading, setLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Message: '',
        Project: '',
        file: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, file });
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
        formdata.append("Project", formData.Project);
        formdata.append("file", formData.file);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        };
        setLoading(true);
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
        <Box as="section" id="Talent" sx={styles.section}>
            <Container>

                <SectionHeading
                    sx={styles.heading}
                    className="text-center"
                    slogan='Talent Network'
                />
                <Heading sx={styles.title}>
                    Apply to Join Talent Network
                </Heading>
                <Text as="h5" sx={styles.summary}>
                    You want to join us but can’t find a job offer that suits your profile ? <br />We invite you to submit your spontaneous application.
                </Text>
                <Col xl="7" lg="7" md="11" className='mx-auto py-5'>
                    <Form onSubmit={handleSubmit} className="text-center">
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="FNAME">
                                <FloatingLabel controlId="floatingInputFNAME" label="First Name*" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="FirstName"
                                        value={formData.FirstName}
                                        onChange={handleInputChange}
                                        placeholder="First Name"
                                        required
                                    />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Please provide a valid Name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="LNAME">
                                <FloatingLabel controlId="floatingInputLNAME" label="Last Name*" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="LastName"
                                        value={formData.LastName}
                                        onChange={handleInputChange}
                                        placeholder="Last Name"
                                        required
                                    />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Please provide a valid Name.</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group controlId="validationEmail">
                            <FloatingLabel controlId="floatingInput" label="E-MAIL*" className="mb-3">
                                <Form.Control
                                    type="email"
                                    name="Email"
                                    value={formData.Email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                        </Form.Group>
                        <Row className="mb-4">
                            <Form.Group controlId="validationBreif">
                                <FloatingLabel controlId="floatingTextarea2" label="Message*">
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
                        <Row className="mb-4 px-2">
                            <Form.Group controlId="filePicker" className="mb-3 file-upload">
                                <Form.Label><IoMdCloudUpload /> Upload Resume</Form.Label>
                                <Form.Control type="file"
                                    onChange={handleFileChange} style={{ visibility: "hidden" }} id="filePicker" size="lg" />
                            </Form.Group>
                        </Row>
                        {!isLoading && <Button
                            type="submit"
                            className='buttonform'

                        >
                            Apply
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
                    </Form>
                </Col>
            </Container>
        </Box>
    );
};

export default TalentNetwork;

const styles = {
    section: {
        backgroundColor: `#f3f6fe`,
        pt: [7, null, null, 6, null, null, 20],
        pb: [0, null, null, 8, null, null, 5],
    },
    grid: {
        display: ['flex', null, null, 'grid'],
        flexDirection: ['column-reverse', null, null, 'unset'],
        gap: '0 30px',
        alignItems: 'center',
        gridTemplateColumns: [
            '1fr',
            null,
            null,
            '1fr',
            '1fr 1fr',
            '600px 1fr',
            '760px 1fr',
        ],
    },
    content: {
        px: [null, null, null, 8, 0],
    },
    title: {
        color: 'heading',
        fontWeight: 700,
        fontSize: [5, null, null, 10, null, 6],
        lineHeight: 1,
        letterSpacing: ['-0.5px', null, null, '1px'],
        textAlign: ['center', null, null, 'center'],
        span: {
            backgroundSize: 'cover',
            px: 2,
        },
    },
    summary: {
        color: 'textSecondary',
        fontFamily: 'headingAlt',
        fontSize: [1, null, null, 2, '15px', 4],
        lineHeight: [1.86, null, null, null, 1.86, 1.86],
        mt: [4, null, null, 5, 3, 5],
        maxWidth: 'none',
        textAlign: ['center', null, null, 'center'],
    },
    '.buttonform': {
        borderRadius: 0,
        border: ' 1px solid #09386b',
        backgroundColor: 'transparent',
        color: '#09386b',
        minHeight: '44px',
    },
};
