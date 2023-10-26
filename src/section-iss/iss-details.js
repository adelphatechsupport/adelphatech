/** @jsx jsx */
import Image from 'components/image';
import { graphql, useStaticQuery } from 'gatsby';
import { Col } from 'react-bootstrap';
import { Box, Container, Heading, Text, jsx } from 'theme-ui';


const ISSDetail = () => {
    const data = useStaticQuery(graphql`
    query {
      ImageISS: file(relativePath: { eq: "iss.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageIISDesign: file(relativePath: {eq: "iss-design.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
      ImageIISDeploy: file(relativePath: {eq: "iss-deploy.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
    }
  `);
    return (
        <Box as="section" id="Blog_Details" sx={styles.section}>
            <Container>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageISS.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Empower"
                        className="rounded"
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto mb-5">
                    <Heading sx={styles.title}>
                        About The Organization
                    </Heading>
                    <Text as="p" sx={styles.summary}>
                        A non-profit leader in international school recruitment. For the last 60 years,
                        ISS has worked to help more than 40,000 teachers, administrators, counsellors, and librarians find their dream jobs in classrooms around the world<br />
                        We worked with ISS to help create and rebuild their website. A website to
                        provide higher audience engagement, brand visibility and awareness.
                    </Text>
                    <Heading sx={styles.title}>
                        The Challenge
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        To provide their audience easy accessibility to their recruitment and professional services . A website that not only
                        requires an intuitive user experience,
                        but a strategy focused around meeting
                        every visitor need and a powerful
                        back-end engine to deliver useful and informational content across the site
                    </Text>
                    <Heading sx={styles.title}>
                        The Process
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        We strongly believe in the agile project management approach which
                        allows for a flexible, interactive, and efficient product delivery. Our projects
                        are split into phases, each phase employs a feedback system that allows
                        each individual piece of the project to be assessed before the final launch.
                    </Text>
                    <Heading sx={styles.titlePhase}>
                        PHASE 1
                    </Heading>
                    <Heading sx={styles.title}>
                        Analyze
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Starting up we identified goals, priorities, company’s and visitor needs. We
                        did this by having conversations with the client. Through this process we
                        were able to find how we could enhance the user experience while using
                        the website and, make this website a solution and accessible to both visitors and individuals interested in ISS services.
                    </Text>
                    <Heading sx={styles.title}>
                        One site, countless audience types
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        In an intensive digital marketing
                        research phase, in which we crafted personas to represent audience types, fueled the long-term
                        strategy and architecture of this
                        complex site.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        We noticed that ISS does more
                        than establish, manage and place
                        teachers in international schools,
                        it communicates to school sponsors, owners and communities envisioning new schools, companies,
                        organizations and individuals
                        hoping to manage international
                        schools, helps hire faculty and
                        school leaders and offer school
                        recruitment services.
                    </Text>
                    <Heading sx={styles.title}>
                        Information Architecture
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Cluttered pages and unorganized content that required re-working the
                        model for a sitemap and information architecture. Using the data gathered in our marketing research and by working hand-in-hand with the
                        client, we consolidated and minimize the amount of pages , creating cleaner content navigation throughout the site, which relies on primary, secondary and tertiary navigation menus.
                    </Text>
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto py-5">
                    <Heading sx={styles.titlePhase}>
                        PHASE 2
                    </Heading>
                    <Heading sx={styles.title}>
                        Design Process
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        From the beginning we knew that the overall experience of the individual
                        using ISS website should be easy and pleasing to use. The team decided to
                        keep the user interface simple, and use proper navigation to direct the individual to the right information.
                    </Text>
                </Col>

                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageIISDesign.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto py-5">
                    <Heading sx={styles.titlePhase}>
                        PHASE 3
                    </Heading>
                    <Heading sx={styles.title}>
                        SEO Strategy
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        By examining and taking a deep dive into existing analytics we sought out
                        opportunities to better promote existing content and ensure key pages
                        remained at the forefront.
                    </Text>
                    <Heading sx={styles.title}>
                        Content Blocks
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        When it came to designing the layout for ISS website, the team decided to
                        have the website be spread out in columns for better readability and
                        legibility for the content within the site.
                    </Text>
                    <Heading sx={styles.title}>
                        More Control with Kentico
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Frustrated by their previously static and difficult-to-manage site, ISS team
                        wanted more control. With Kentico, they’re seeing benefits, by empowering
                        them with flexibility and configurability. By using content blocks, we gave
                        them complete control and maneuverability; moving assets, text, blocks up
                        the page as easy as a drag-and-drop.
                    </Text>
                    <Heading sx={styles.titlePhase}>
                        PHASE 4
                    </Heading>
                    <Heading sx={styles.title}>
                        Test and Deploy
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        In just two months, we transformed our frustratingly static website into a dynamic, user-friendly platform, all thanks to our 'Test and Deploy' approach and the power of content blocks.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        By examining and taking a deep dive into existing analytics we sought out
                        opportunities to better promote existing content and ensure key pages
                        remained at the forefront.
                    </Text>
                    <Heading sx={styles.titlePhase}>
                        In 2 Months We Delivered The Site Launch!!
                    </Heading>
                </Col>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageIISDeploy.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                </Col>
            </Container>
        </Box >
    );
};

export default ISSDetail;

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
    titlePhase: {
        color: '#5ac4be',
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
        fontSize: ['15px', null, null, 2, '15px', 4],
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
