/** @jsx jsx */
import Image from 'components/image';
import { graphql, useStaticQuery } from 'gatsby';
import { Col } from 'react-bootstrap';
import { Box, Container, Heading, Text, jsx } from 'theme-ui';


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
    return (
        <Box as="section" id="Blog_Details" sx={styles.section}>
            <Container>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageWebhelp.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp"
                        className="rounded"
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto mb-5">
                    <Text as="p" sx={styles.summary}>
                        At first glance, the Webhelp website at webhelp.com appears to be a classic corporate website. However, behind the scenes, there is a well-thought-out system that tailors the website's content based on the user's location.
                    </Text>
                    <Heading sx={styles.title}>
                        Webhelp: A Global BPO Leader
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Webhelp is a multi-national business process outsourcing and consultancy company headquartered in Paris. Established in 2000, Webhelp specializes in providing customer experience and business solutions that empower businesses to excel by enhancing the customer journey. Webhelp's extensive range of services caters to various industries and is customized to meet the unique needs of clients.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Webhelp's solutions are accessible worldwide. However, given the diverse requirements of clients across different regions and sectors, Webhelp offers tailored information and solutions for each client. The global website includes content in multiple languages and covers various industries.
                    </Text>
                    <Heading sx={styles.title}>
                        Crafting a Unified Web Experience
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Following careful consideration of the ideal site structure, a versatile web platform was created to ensure a seamless user experience.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        The website is built using a modern web development approach, allowing for flexible content components and ensuring a responsive and adaptable design. Components can be easily customized and repositioned as needed.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        The components for Webhelp's web platform are developed once and can be used as needed across various websites. Components that are irrelevant to specific clients or sectors can be excluded. This approach simplifies the backend structure of each website, making it easier for content managers to work with a consistent system.
                    </Text>
                </Col>


                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageWebhelpFormation.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto py-5">
                    <Heading sx={styles.title}>
                        Webhelp's Tailored Solutions
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Founded in 2000, Webhelp is a global leader in customer experience and business solutions. Webhelp specializes in enhancing the customer journey for businesses across diverse industries by providing customized services that meet the unique needs of clients.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Webhelp's solutions are accessible globally, serving clients in various regions and industries. However, recognizing the diverse requirements of clients and the distinct demands of different markets, Webhelp provides tailored information and solutions for each client. The global website is designed to accommodate multiple languages and diverse sectors.
                    </Text>
                    <Heading sx={styles.title}>
                        Building Seamless Web Experiences
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        After careful considerations of the optimal site architecture, Webhelp crafted a highly adaptable web platform to ensure a seamless user experience.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        The website is constructed using contemporary web development approaches, allowing for flexible content components that ensure a responsive and adaptive design. These components can be easily customized and rearranged based on the unique needs of each client.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Webhelp's approach ensures that components developed for the web platform are versatile and can be utilized across various websites and industries. Components that are not pertinent to specific clients or sectors can be excluded. This unified approach streamlines the backend of each website, simplifying the work for content managers who only need to learn and manage one consistent system.
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
