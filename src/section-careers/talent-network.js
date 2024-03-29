/** @jsx jsx */
import { useFormik } from "formik";
import { useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { IoMdCloudUpload } from 'react-icons/io';
import Swal from 'sweetalert2';
import { Box, Button, Container, Heading, Text, jsx } from 'theme-ui';
import * as Yup from 'yup';
import SectionHeading from '../components/section-heading';

const TalentNetwork = () => {
    const [isLoading, setLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Message: '',
        files: null,
    });
    const Schema = Yup.object().shape({
        FirstName: Yup.string().required('First Name is required'),
        LastName: Yup.string().required('Last Name is required'),
        Email: Yup.string().email('Invalid email address').required('Email is required'),
        Message: Yup.string().required('Message is required'),
        files: Yup.mixed().required(),
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const files = e.target.files[0];
        setFormData({ ...formData, files });
    };

    const handleSubmit = async () => {
        setButtonDisabled(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhdGFoaXJAYWRlbHBoYXRlY2guY2EiLCJqdGkiOiJkMjhmY2E3Ny1jY2JjLTQ3MGItYWQ1MS1eYTY0NDc1NDUzYjIiLCJlbWFpbCI6ImF0YWhpckBhZGVscGhhdGVjaC5jb20iLCJ1aWQiOiJjNGZiZTcxNy1jYz12LTQwNDQtYWIxOC0wYmY5MjQxYWNiZTUiLCJyb2xlcyI6IlN1cGVyIEFkbWluIiwiZXhwIjoxNjk3MzE1Mzk0LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.mbkPm4miavHCC00LNNiM6DnDWqMVdR8A4uxh7tJoiVM");

        const formdata = new FormData();
        formdata.append("FirstName", formData.FirstName);
        formdata.append("LastName", formData.LastName);
        formdata.append("Email", formData.Email);
        formdata.append("Message", formData.Message);
        formdata.append("files", formData.files);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        };
        setLoading(true);
        setValidated(true);
        try {
            const response = await fetch("https://api-academy.adelphalabs.com/api/Generic/Form/ATFile", requestOptions);
            if (response.ok) {
                console.log('Form submitted successfully');
                // Handle success, e.g., show a success message to the user
                setFormData({
                    FirstName: '',
                    LastName: '',
                    Email: '',
                    Message: '',
                    files: null,
                });
                Swal.fire('Success', 'Thank you for contacting us. Our team will contact you within 24 hours.', 'success');
                setLoading(false);
                setButtonDisabled(false);
            } else {
                console.error('Form submission failed:', response.status);
                // Handle the error, e.g., show an error message to the user
                Swal.fire('Error', 'Form submission failed', 'error');
                setButtonDisabled(false);
                setLoading(false);
            }
        } catch (error) {
            console.error('Form submission failed:', error);
            // Handle the error, e.g., show an error message to the user
            Swal.fire('Error', 'Form submission failed', 'error');
            setLoading(false);
            setButtonDisabled(false);
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
            files: null,
        },

        validationSchema: Schema,
        onSubmit: () => {

            handleSubmit()
        },
    });
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
                    <form validated={validated.toString()} onSubmit={handleSubmit} method="post" className="text-center">
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <FloatingLabel label="First Name*" className="mb-3">
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
                                            <div className='text-start'>{formik.errors.FirstName}</div>
                                        ) : null}
                                    </div>
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Please provide a valid Name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" >
                                <FloatingLabel label="Last Name*" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="LastName"
                                        value={formData.LastName}
                                        onChange={(e) => {
                                            handleInputChange(e);
                                            formik.setFieldValue('LastName', e.target.value);
                                        }}
                                        placeholder="Last Name"
                                        required
                                    />
                                    <div className="text-danger">
                                        {formik.touched.LastName && formik.errors.LastName ? (
                                            <div className='text-start'>{formik.errors.LastName}</div>
                                        ) : null}
                                    </div>
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Please provide a valid Name.</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group>
                            <FloatingLabel label="E-MAIL*" className="mb-3">
                                <Form.Control
                                    type="email"
                                    name="Email"
                                    value={formData.Email}
                                    onChange={(e) => {
                                        handleInputChange(e);
                                        formik.setFieldValue('Email', e.target.value);
                                    }}
                                    placeholder="Email"
                                    required
                                />
                                <div className="text-danger">
                                    {formik.touched.Email && formik.errors.Email ? (
                                        <div className='text-start'>{formik.errors.Email}</div>
                                    ) : null}
                                </div>
                            </FloatingLabel>
                        </Form.Group>
                        <Row className="mb-4">
                            <Form.Group>
                                <FloatingLabel label="Message">
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

                                    />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row className="mb-4 px-2">
                            <Form.Group className="mb-3 file-upload">
                                <Form.Label htmlFor="filePicker"><IoMdCloudUpload /> Upload Resume</Form.Label>
                                <Form.Control
                                    type="file" name="files"
                                    onChange={(e) => {
                                        handleFileChange(e);
                                        formik.setFieldValue('files', e.target.value);
                                    }}
                                    style={{ visibility: "hidden" }}
                                    id="filePicker"
                                    size="lg"
                                />
                                <div className="text-danger">
                                    {formik.touched.files && formik.errors.files ? (
                                        <div className='text-start'>{formik.errors.files}</div>
                                    ) : null}
                                </div>
                            </Form.Group>
                        </Row>
                        {!isLoading && <Button
                            type="button"
                            className='buttonform'
                            onClick={formik.handleSubmit}
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
                    </form>
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
