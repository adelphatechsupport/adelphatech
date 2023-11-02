/** @jsx jsx */
import { Box, Container, Heading, Text, jsx } from 'theme-ui';
import SectionHeading from '../components/section-heading';

const Banner = () => {
    return (
        <Box as="section" id="about" sx={styles.section}>
            <Container>
                <Box sx={styles.grid}>
                    <Box sx={styles.content}>
                        <SectionHeading
                            sx={styles.heading}
                            slogan='OUR SERVICES'
                        />
                        <Heading sx={styles.title}>
                            Bringing <br />
                            projects to <span className='display-4 fw-bolder'>Life</span>
                        </Heading>
                        <Text as="h5" sx={styles.summary}>
                            From the very first consultation to the final project handover, our team of seasoned experts meticulously assesses your business's distinct needs. We then craft customized technical solutions to guide your website or mobile app precisely where it aspires to be.
                        </Text>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Banner;

const styles = {
    section: {
        backgroundColor: "#fff",
        pt: [15, null, null, 6, null, null, 20],
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
    playPause: {
        color: 'white',
        fontWeight: 700,
        position: 'absolute',
        padding: '0px',
        bottom: [40, null, null, 70, 100],
        left: '50%',
        transform: 'translateX(-50%)',
        ':focus': {
            outline: 0,
        },
        img: {
            mr: '16px',
        },
    },
    title: {

        color: 'heading',
        fontFamily: 'headingAlt',
        fontSize: [9, null, null, 10, 12, 45, 16],
        lineHeight: [1.31, null, null, 1.5, null, 1.26],
        letterSpacing: [0, null, null, null, '9px'],
        fontWeight: 500,
        textAlign: ['center', null, null, 'left'],
        span: {
            backgroundSize: 'cover',
            px: 2,
        },
    },
    summary: {
        color: 'textSecondary',
        fontFamily: 'headingAlt',
        fontSize: ["15px", null, null, 2, '15px', 4],
        lineHeight: [1.86, null, null, null, 1.86, 1.86],
        mt: [4, null, null, 5, 3, 5],
        maxWidth: 'none',
        textAlign: ['center', null, null, 'left'],
    },
    svgicon: {
        pt: [7, null, null, 6, null, null, 13],
    }
};
