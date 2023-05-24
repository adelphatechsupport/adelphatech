
import React, { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Box, Button, Container, Heading, Text } from "theme-ui";
import Recaptcha from "react-google-recaptcha";
import Swal from "sweetalert2";
const ContactForm = () => {
    async function apiCall(props) {
        return await fetch(props?.link, {
            method: props?.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: props?.isFormData ? props?.data : JSON.stringify(props?.data),
        })
            .then(async (response) => {
                const statusCode = response.status;
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json().then((data) => [statusCode, data]);
                } else {
                    return response.text().then((data) => [statusCode, data]);
                }
            })
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function ModelStateMessage(result) {
        try {
            if (
                result[1].modelState !== null &&
                result[1].modelState !== undefined &&
                result[1].modelState !== ""
            ) {
                let modelState = result[1].modelState;
                if (modelState)
                    Object.keys(modelState).forEach(function (k) {
                        modelState[k].forEach((element) => {
                            Swal.fire("Oops?", element, "error");
                        });
                    });
            } else if (typeof result[1] === "string") {
                Swal.fire("Oops?", result[1], "error");
            } else if (
                result[0] === 401 &&
                result[1].message !== null &&
                result[1].message !== undefined &&
                result[1].message !== ""
            ) {
                Swal.fire("Oops?", result[1].message, "error");
                setTimeout(() => {
                    localStorage.clear();
                    window.location.href = "/auth/login";
                }, 1000);
            } else if (
                result[1].message !== null &&
                result[1].message !== undefined &&
                result[1].message !== ""
            ) {
                Swal.fire("Oops?", result[1].message, "error");
            } else if (
                result[1].error_description !== null &&
                result[1].error_description !== undefined &&
                result[1].error_description !== ""
            ) {
                Swal.fire("Oops?", result[1].error_description, "error");
            } else if (result[0] === 400) {
                ModelStateMessage400(result);
            } else if (result[0] === 402) {
                Swal.fire("Oops?", "You have to subscribe first", "error");
            } else {
                Swal.fire("Oops?", "Bad request", "error");
            }
        } catch (err) { }
    }

    function ModelStateMessage400(result, setListFun) {
        try {
            /* if (!!result[1]) {
              Swal.fire("Oops?", result[1], "error");
              return false;
            } */
            if (!!result[1]?.message) {
                Swal.fire("Oops?", result[1].message, "error");
                return false;
            }
            if (!result[1]?.errors) result[1] = JSON.parse(result[1]);
            if (!!result[1]?.errors) {
                var p = result[1]?.errors;
                var list = [];
                var list2 = [];
                for (var key in p) {
                    if (p.hasOwnProperty(key)) {
                        list2.push({ key: key, value: p[key] });

                        var a = list.findIndex(
                            (x) => x === `<div class="col-12">${p[key]}</div>`
                        );
                        if (a === -1) list.push(`<div class="col-12">${p[key]}</div>`);
                    }
                }
                if (!!setListFun) setListFun(list2);

                Swal.fire({
                    title:
                        '<i class="fas fa-exclamation-circle text-danger"></i> <strong class="text-danger h4">Required</strong>',
                    icon: "error",
                    html: `<div class="row p-0 m-0">${list.join(" ")}</div>`,
                    showCloseButton: true,
                    confirmButtonText: "OK!",
                });
            } else {
                Swal.fire("Oops?", "Bad_request", "error");
            }
        } catch (err) {
            Swal.fire("Oops?", "Bad_request", "error");
        }
    }
    const [buttonDisabled, setButtonDisabled] = React.useState(true)
    const [isLoading, setLoading] = React.useState(false)
    const [validated, setValidated] = useState(false);
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",

    })
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Concatenate first name and last name
        if (name === 'name') {
            const [firstName, ...lastName] = value.split(' ');
            setFormState((prevState) => ({
                ...prevState,
                firstName: firstName,
                lastName: lastName.join(' ') || '',
                name: value,
            }));
        } else {
            setFormState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        } else {
            setLoading(true);
            setValidated(false);
            const recaptchaValue = recaptchaRef.current.getValue();
            apiCall({
                method: "POST",
                link: "https://api.deliveryease.co/api/Generic/Form/AT",
                data: formState,
            })
                .then((response) => {
                    setLoading(false);
                    if (!!response && response.length > 0 && response[0] === 200) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Success",
                        });
                        form.reset(); // Clear the form inputs
                        setFormState({
                            firstName: "",
                            lastName: "",
                            email: "",
                            message: "",
                        });
                    } else {
                        ModelStateMessage(response);
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    // Handle error
                    console.log(error);
                    setLoading(false);
                });
        }
    };
    const recaptchaRef = React.createRef()
    return (
        <Box as="section" id="Contactform" sx={styles.section}>
            <Container>
                <Heading sx={styles.title}>
                    Send us a message!
                </Heading>
                <Text as="p" sx={styles.summary}>
                    Fill out the contact form or send an email to <a href='mailto:support@AdelphaTech.com' className='text-decoration-none' sx={styles.email}>Support@AdelphaTech.com</a>
                </Text>
                <Box sx={styles.grid} >
                    <Col xl="9" lg="9" md="11" className='mx-auto py-5'>
                        <form noValidate validated={validated} onSubmit={handleSubmit} method="post"
                            data-netlify-recaptcha="true"
                            data-netlify="true"
                            name="message"
                            data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="message" />

                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="NAME">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="FIRST NAME*"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" name="firstname" id="first_name" onChange={handleChange} placeholder="First Name" required />
                                    </FloatingLabel>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="NAME">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="LAST NAME*"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" name="lastname" id="last_name" onChange={handleChange} placeholder="Last Name" required />
                                    </FloatingLabel>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom04">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="E-MAIL*"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" name="email" id="email" onChange={handleChange} placeholder="Your E-mail" required />
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
                                            name="message"
                                            id='message'
                                            onChange={handleChange}
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
                                    onChange={() => setButtonDisabled(false)}
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