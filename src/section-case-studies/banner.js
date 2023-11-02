
import React from 'react';
import { Box, Container, Heading, Text } from "theme-ui";
import SectionHeading from "../components/section-heading";


const Banner = () => {
    return (
        <Box as="section" id="about" sx={styles.section}>
            <Container>
                <SectionHeading
                    slogan="OUR WORK"
                    className="text-start"
                />
                <Heading sx={styles.title}>
                    We help your website and<br />
                    business stay ahead of the curve.
                </Heading>
                <Text as="p" sx={styles.summary}>
                    With over 10+ years of experience in the website development business, we’ve had the<br/>
                    pleasure of working with some amazing partners. Whether you are a global enterprise, an<br/>
                    upstart startup, a cultural event or an impactful charity, we make sure to understand your goals<br/>
                    and help your website reach them.
                </Text>
            </Container>
        </Box>
    )
};
export default Banner;

const styles = {
    section: {
        backgroundColor: `#fff`,
        pt: [18, null, null, 17, null, null, 130],
        pb: [10, null, null, 12, 7, 9, 0],
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
        fontSize: ['15px', null, null, 2, '15px', 4],
        lineHeight: [1.86, null, null, null, 1.86, 2.25],
        m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
    },
}