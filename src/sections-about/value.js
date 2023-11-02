import Flexible from '../assets/images/services/Flexible.svg';
import Improving from '../assets/images/services/Improving.svg';
import Partners from '../assets/images/services/Partners.svg';
import React from 'react';
import { Box, Container, Heading, Image, Text } from 'theme-ui';
import SectionHeading from "../components/section-heading";

const Value = () => {
    return (
        <Box as="section" id="value" sx={styles.section}>
            <Container>
                <SectionHeading
                    slogan="Our Value"
                />
                <div className='co-xl-12'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-4 col-md-6 px-lg-0 px--md-0 px-3'>
                            <div className='card img-value-1 border-0' />
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 px-lg-0 px--md-0 px-3'>
                            <div className='card h-100 rounded-0 border-0 text-center'>
                                <div className='card-body'>
                                    <div as="figure" className='pt-xl-5 pt-lg-5 pt-md-3 pt-1 mt-lg-5 mt-lg-5 mt-md-3 mt-1'>
                                        <Image width="64" height="64" src={Flexible} alt={"44"} loading="lazy" />
                                    </div>
                                    <Heading as="h1" className='text-dark fw-bold py-5 '>Flexible <br />
                                        Work Life
                                    </Heading>
                                    <Text as="h6" className='text-dark px-4'>From remote work to flexible working hours. Create a working schedule that suits you best.</Text>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 px-xl-0 px-lg-0 px--md-0 px-3'>
                            <div className='card img-value-2 border-0' />
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 px-lg-0 px--md-0 px-3'>
                            <div className='card h-100 rounded-0 border-0 text-center'>
                                <div className='card-body'>
                                    <div as="figure" className='pt-xl-5 pt-lg-5 pt-md-3 pt-1 mt-lg-5 mt-lg-5 mt-md-3 mt-1'>
                                        <Image width="64" height="64" src={Improving} alt={"44"} loading="lazy" />
                                    </div>
                                    <Heading as="h1" className='text-dark fw-bold py-5 '>Always Improving
                                    </Heading>
                                    <Text as="h6" className='text-dark px-4'>We’re always reflecting and questioning so we can be better for our clients and partners.</Text>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 px-lg-0 px--md-0 px-3'>
                            <div className='card img-value-3 border-0' />
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 px-lg-0 px--md-0 px-3'>
                            <div className='card h-100 rounded-0 border-0 text-center'>
                                <div className='card-body'>
                                    <div as="figure" className='pt-xl-5 pt-lg-5 pt-md-3 pt-1 mt-lg-5 mt-lg-5 mt-md-3 mt-1'>
                                        <Image width="64" height="64" src={Partners} alt={"44"} loading="lazy" />
                                    </div>
                                    <Heading as="h1" className='text-dark fw-bold py-5 '>Focus on our partners
                                    </Heading>
                                    <Text as="h6" className='text-dark px-4'>When you trust AdelphaTech with your project, you become part of the team. We value your long-term relationship and work to maintain your trust and connection.</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Box>

    )
};
export default Value;

const styles = {
    section: {
        backgroundColor: "#fff",
        pt: [8, null, null, 8, 10, null, 15],
        pb: [7, null, null, null, 10, null, 14],
    },
    serviceGrid: {
        backgroundColor: 'white',
        boxShadow: '0px 0px 25px rgba(54, 91, 125, 0.04)',
        borderRadius: 10,
        gap: [8, null, null, '60px 40px', '50px 30px', '60px 40px'],
        justifyContent: 'center',
        gridTemplateColumns: [
            'repeat(1, 250px)',
            null,
            null,
            'repeat(2, 260px)',
            'repeat(3, 258px)',
            'repeat(3, 300px)',
        ],
        pt: [8, null, null, 16],
        pb: [8, null, null, 15],
    },
};