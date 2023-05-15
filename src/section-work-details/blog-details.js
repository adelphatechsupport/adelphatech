/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import support from 'assets/images/support.png';
import { LearnMore } from 'components/link';
import { Col } from 'react-bootstrap';


const BlogDetail = () => {
    const data = useStaticQuery(graphql`
    query {
      ImageWebhelp: file(relativePath: { eq: "webhelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageWebhelpFormation: file(relativePath: { eq: "webhelp-formation.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
    }
  `);
    console.log("support", support);
    return (
        <Box as="section" id="Blog_Details" sx={styles.section}>
            <Container>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageWebhelp.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp"
                        class="rounded"
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto mb-5">
                    <Text as="p" sx={styles.summary}>
                        At first glance, the Oviva website appears to be a classic corporate website. In the background, however, there is a well thought-out system that displays the appropriate website depending on where it is accessed.
                    </Text>
                    <Heading sx={styles.title}>
                        Market-specific <br /> requirements
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Founded in 2014, the Swiss health start-up helps people to live healthier and happier by offering app-guided therapy to change eating and lifestyle habits. The costs for the program can be covered by health insurances.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Oviva’s therapy offer is available in Germany, Switzerland, France and the UK. However, as health systems differ from country to country, country-specific information is provided. The website for the Swiss market even has to cover three languages: German, French and English.
                    </Text>
                    <Heading sx={styles.title}>
                        Design and architecture <br /> seamlessly integrated
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        After intensive deliberations on the best possible site architecture, a WordPress multisite was created with a code structure and design all in one.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        The site is built with our starter theme Flynt, which is based on a component-based approach. Components are blocks that can be inserted and moved around among each other as desired.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        The components for Oviva only have to be developed once and can be used as desired on all websites. Components that are not relevant for certain markets can be excluded from use. The advantage of the multisite solution is that the backend of each website is built in the same way – this makes the work easier for content managers, as they only need to familiarise themselves with one system.
                    </Text>
                </Col>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageWebhelpFormation.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        class=""
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto mb-5 py-5">
                    <Heading sx={styles.title}>
                        Market-specific <br /> requirements
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Founded in 2014, the Swiss health start-up helps people to live healthier and happier by offering app-guided therapy to change eating and lifestyle habits. The costs for the program can be covered by health insurances.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Oviva’s therapy offer is available in Germany, Switzerland, France and the UK. However, as health systems differ from country to country, country-specific information is provided. The website for the Swiss market even has to cover three languages: German, French and English.
                    </Text>
                    <Heading sx={styles.title}>
                        Design and architecture <br /> seamlessly integrated
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        After intensive deliberations on the best possible site architecture, a WordPress multisite was created with a code structure and design all in one.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        The site is built with our starter theme Flynt, which is based on a component-based approach. Components are blocks that can be inserted and moved around among each other as desired.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        The components for Oviva only have to be developed once and can be used as desired on all websites. Components that are not relevant for certain markets can be excluded from use. The advantage of the multisite solution is that the backend of each website is built in the same way – this makes the work easier for content managers, as they only need to familiarise themselves with one system.
                    </Text>
                </Col>
            </Container>
        </Box >
    );
};

export default BlogDetail;

const styles = {
    section: {
        backgroundColor: '#f3f6fe',
        pt: [8, null, 12, 6, null, 10],
        pb: [null, null, null, 8, 0],
    },
    grid: {
        gap: [null, null, null, null, 12],
        display: ['flex', null, null, 'grid'],
        flexDirection: ['column-reverse', null, null, 'unset'],
        alignItems: 'center',
        gridTemplateColumns: ['1fr', null, null, null, '470px 1fr', '1fr 549px'],
    },
    illustration: {
        textAlign: 'center',
        position: 'relative',
        mt: [2, null, null, 0, 4, 0],
        img: {
            maxWidth: ['100%', null, null, null, null, ''],
        },
    },
    content: {
        marginTop: [null, null, null, null, null, -16],
        maxWidth: [null, null, null, 420, 560, 'none'],
        margin: [null, null, null, '0 auto', 'unset'],
        textAlign: ['center', null, null, null, 'left'],
        mb: 4
    },
    title: {
        color: '#09386b',
        fontFamily: 'headingAlt',
        fontSize: [4, null, null, 8, null, null, 14],
        fontWeight: 500,
        lineHeight: [1.33, null, 1.4, 1.2],
        letterSpacing: ['-0.5px', null, null, '-1px'],
        mb: 3,
        mt: 6,
        span: {
            backgroundSize: 'cover',
            px: 2,
        },
    },
    summary: {
        color: 'textSecondary',
        fontFamily: 'headingAlt',
        fontSize: ['13px', null, null, 2, '15px', 4],
        lineHeight: [1.86, null, null, null, 1.86, 1.5],
        m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
    },
    list: {
        gap: '0 18px',
        fontFamily: 'headingAlt',
        gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 200px)'],
        justifyContent: [null, null, null, 'center', 'unset'],
        listStyle: 'none',
        display: 'block',
        mt: [4, null, null, 5, 4, 5],
        p: 0,
        li: {
            fontSize: [0, 1, null, 2, '15px', 2],
            fontWeight: 600,
            alignItems: 'center',
            color: 'textSecondary',
            fontFamily: 'headingAlt',
            display: 'flex',
            lineHeight: [2.81, null, null, null, 2.2, 2.81],
        },
    },
};
