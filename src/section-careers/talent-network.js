/** @jsx jsx */
import { Box, Button, Container, Heading, Text, jsx } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useState } from 'react';

const TalentNetwork = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
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
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className='text-center'>
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
                        <Row className="mb-4 px-2">
                            <Form.Group controlId="filePicker" className="mb-3 file-upload">
                                    <Form.Label for="filePicker"><i class="fa-solid fa-file"></i> Upload Resume</Form.Label>
                                    <Form.Control type="file" style={{ visibility: "hidden" }} id="filePicker" size="lg" />
                            </Form.Group>
                        </Row>
                        <Button type="submit" className='buttonform' >Apply</Button>
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
        border:' 1px solid #09386b',
        backgroundColor: 'transparent',
        color: '#09386b',
        minHeight: '44px',
      },
};
