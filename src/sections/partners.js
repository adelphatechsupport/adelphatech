/** @jsx jsx */
import { rgba } from 'polished';
import { Box, Flex, Heading, Image, jsx } from 'theme-ui';
import CBC from "../assets/images/partners/CBC.png";
import Deloitte from "../assets/images/partners/Deloitte.png";
import Loblaws from "../assets/images/partners/Loblaws.png";
import MotusBank from "../assets/images/partners/Motus.png";
import ShoppersDrugMart from "../assets/images/partners/ShoppersDrugMart.png";

const logos = [
    {
        name: 'CBC',
        src: CBC,
        link:'https://CBC.ca'
    },
    {
        name: 'Loblaws',
        src: Loblaws,
        link:'https://www.loblaws.ca'
    },
    {
        name: 'ShoppersDrugMart',
        src: ShoppersDrugMart,
        link:'https://www.shoppersdrugmart.ca/'
    },
    {
        name: 'Deloitte',
        src: Deloitte,
        link:'https://www2.deloitte.com/us/en.html'
    },
    {
        name: 'MotusBank',
        src: MotusBank,
        link:'https://www.motusbank.ca/'
    },

];

const Partners = () => {
    return (
        <Box as="section" className="py-xl-15 py-lg-15 py-md-10 py-1" id="partners" sx={styles.section}>
            <div className='container'>
                <Box sx={styles.contentWrapperPartner}>
                    <Flex sx={styles.sponsoredBy}>
                        <Heading as="h1" className="me-5">Trusted by</Heading>
                        <Flex sx={styles.sponsor} className='flex-wrap'>
                            {logos?.map((logo, index) => (
                                <Flex as="figure" key={index}>
                                    <a href={logo.link} target="_blank" rel="noreferrer">
                                        <Image src={logo.src} alt={logo.name} loading="lazy" />
                                    </a>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                </Box>
            </div>
        </Box>
    );
};

export default Partners;

const styles = {
    section: {
        backgroundColor: "white",
        h1: {
            fontFamily: 'headingAlt',
            fontSize: [33, 45],
            lineHeight: [1.31, null, null, 1.5, null, 1.26],
            letterSpacing: [0, null, null, null, '-1.5px'],
            color: '#3b3b3b',
        },
    },
    contentWrapperPartner: {
        gap: [null, null, null, null, 8, 15],
        display: ['block', null, null, null, ''],
        alignItems: 'center',
        gridTemplateColumns: [null, null, null, null, '1fr 1fr', '598px 1fr'],
        minHeight: ['auto', null, null, null, '10vh', '10vh', '10vh'],
        pt: [7, null, null, 6, null, null, 5],
        pb: [7, null, null, 6, null, null, 5],
        '@media only screen and (min-width:1501px) and (max-width:1600px)': {
            pt: 14,
        },
    },
    bannerContent: {
        maxWidth: [null, null, 450, '600px', null, 'none'],
        m: [null, null, '0 auto', null, 0],
        textAlign: ['center', null, null, null, 'left'],
        h2: {
            fontFamily: 'headingAlt',
            fontSize: [40],
            lineHeight: [1.31, null, null, 1.5, null, 1.26],
            letterSpacing: [0, null, null, null, '-1.5px'],
            color: '#3b3b3b',
        },
        p: {
            fontSize: ['13px', null, null, 2, 3],
            lineHeight: [1.87, null, null, 2, null, 2.33],
            color: '#fff',
            maxWidth: [null, null, 370, 470],
            m: ['20px auto 0', null, null, null, '25px auto 0'],
        },
    },
    sponsoredBy: {
        alignItems: 'center',
        justifyContent: ['right', null, null, 'right'],

        maxWidth: [null, null, null, 470, 'none'],
        span: {
            fontSize: ['13px', null, null, null, 2],
            lineHeight: 2.62,
            color: rgba('#566272', 0.6),
        },
        '@media only screen and (max-width: 768px)':{ 
            display:'contents'
        }
    },
    sponsor: {
        alignItems: 'center',
        display: 'flex',
        figure: {
            ml: [2, null, null, null, 4, 5],
            img: {
                maxWidth: ['60px', null, null, null, '80px', '100%'],
                width: '75%',
                aspectRatio: '3/2',
                Object: 'contain'
            },
            '@media only screen and (max-width: 768px)':{

                img:{
                    width:"100% !important",
                    maxWidth: '110px',
                }
            }
        },
    },
};
