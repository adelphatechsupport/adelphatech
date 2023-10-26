/** @jsx jsx */
import { Box, Container, Heading, Image, Text, jsx } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import ContactIcon from "../assets/images/Contact/contact.svg"

const Banner = () => {
    return (
        <Box as="section" id="about" sx={styles.section}>
            <Container>
                <Box sx={styles.grid}>
                    <Box sx={styles.content}>
                        <SectionHeading
                            sx={styles.heading}
                            slogan='CONTACT'
                        />
                        <Heading sx={styles.title}>
                            Ready for the future?
                        </Heading>
                        <Text as="h5" sx={styles.summary}>
                            The first step is simple: Send us a message.<br/>
                            We’ll get back to you and tell you what to do next.
                        </Text>
                    </Box>
                    <Box sx={styles.svgicon}>
                        <Image src={ContactIcon} alt="svg-icon"  loading="lazy" />
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
        pt: [13, null, null, 6, null, null, 13],
        pb: [0, null, null, 8, null, null, 11],
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
        fontSize: ["15px", null, null, 2, '15px', 4],
        lineHeight: [1.86, null, null, null, 1.86, 1.86],
        mt: [4, null, null, 5, 3, 5],
        maxWidth: 470,
        textAlign: ['center', null, null, 'left'],
    },
    svgicon:{
        pt: [7, null, null, 6, null, null, 13],
        width:["50%", "100%",]
    }
};
