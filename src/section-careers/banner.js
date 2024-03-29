/** @jsx jsx */
import { Box, Container, Heading, Text, jsx } from 'theme-ui';
import SectionHeading from '../components/section-heading';

const Banner = () => {
    return (
        <Box as="section" id="about" sx={styles.section}>
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    slogan='Career'
                />
                <Heading sx={styles.title}>
                    We achieve and exceed the things we do.
                </Heading>
                <Text as="h5" sx={styles.summary}>
                    At AdelphaTech we are a hard-working, dependable team. Our experts strive for excellence in everyday interactions. That is why we are looking for talented professionals to join our team. With offices in different parts of the world, we think globally and see both our customers and employees as partners.
                </Text>
                
            </Container>
        </Box>
    );
};

export default Banner;

const styles = {
    section: {
        backgroundColor: "#fff",
        pt: [15, null, null, 6, null, null, 20],
        pb: [0, null, null, 8, null, null, 1],
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
        fontWeight: 500,
        fontSize: [5, null, null, 10, null, 17],
        lineHeight: 1,
        letterSpacing: ['-0.5px', null, null, '-1px'],
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
