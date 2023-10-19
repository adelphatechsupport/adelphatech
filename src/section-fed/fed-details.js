/** @jsx jsx */
import Image from 'components/image';
import { graphql, useStaticQuery } from 'gatsby';
import { Col } from 'react-bootstrap';
import { Box, Container, Heading, Text, jsx } from 'theme-ui';


const FedDetail = () => {
    const data = useStaticQuery(graphql`
    query {
      ImageFed: file(relativePath: { eq: "fed.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageFedArchitecture: file(relativePath: {eq: "fed-architecture.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
      ImageFedDesign: file(relativePath: {eq: "fed-design.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
      ImageFedUIUX: file(relativePath: {eq: "fed-UIUX.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
      ImageFedIcon: file(relativePath: {eq: "fed-icon.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
      ImageFedPortal: file(relativePath: {eq: "fed-portal.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
      ImageFedDeploy: file(relativePath: {eq: "fed-deploy.png"}) {
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
                        src={data.ImageFed.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Fed"
                        className="rounded"
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto mb-5">
                    <Heading sx={styles.title}>
                        About The Organization
                    </Heading>
                    <Text as="p" sx={styles.summary}>
                        FED is a meal kit ordering system designed to make it easy for customers
                        to prepare nutritious and great-tasting meals with fresh ingredients.
                        Customers can choose from a list of daily featured kits, access ingredients,
                        nutritional info, and cooking instructions
                    </Text>
                    <Text as="p" sx={styles.summary}>
                        We worked with FED to help create and expand a current mobile app pilot.
                        We proceeded on doing a web portal with API middleware that provided
                        personalized access to selected information and support business to
                        business and business to user communication. Ultimately, making better
                        communication between the client and the users
                    </Text>
                    <Heading sx={styles.title}>
                        The Challenge
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        To provide their current and new users an
                        user friendly mobile app that will deliver the
                        meal kit ordering system with refined
                        features and in a secured network .
                        Additionally, to provide the client a web
                        portal, that gives staff users personalized
                        access and a single point to find the entire
                        meal kit ordering system data.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        The goal was to improve the app and to
                        deploy to 6 additional sites/hospitals. After
                        completion, roll out to 300 hospitals across
                        United States is underway.
                    </Text>
                    <Heading sx={styles.title}>
                        The Process
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        We strongly believe in the agile approach which allows for a flexible, interactive, and efficient product delivery. Our projects are split into phases,
                        each phase employs a feedback system that allows each individual piece
                        of the project to be assessed before the final launch.
                    </Text>
                    <Heading sx={styles.titlePhase}>
                        PHASE 1
                    </Heading>
                    <Heading sx={styles.title}>
                        Analyze
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Starting up we identified goals, priorities, client and user needs. We did
                        this by having conversations with the client. Through this process we were
                        able to find how we could enhance both user experiences.
                    </Text>
                    <Heading sx={styles.title}>
                        Designing For The Type Of Users
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        FED targets 3 types of users
                        Medical staff within healthcare, students & faculty within education and
                        working professionals within Business & Industry.
                    </Text>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <Text as="p" sx={styles.summary} className='mb-0'>
                            <span class="badge bg-warning rounded-pill me-2">1</span>Medical Staff
                        </Text>
                        <Text as="p" sx={styles.summary} className='mb-0'>
                        <span class="badge bg-warning rounded-pill me-2">2</span>Students + Faculty
                        </Text>
                        <Text as="p" sx={styles.summary} className='mb-0'>
                        <span class="badge bg-warning rounded-pill me-2">3</span>Working Professionals
                        </Text>
                    </div>
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto pb-5">
                    <Heading sx={styles.title}>
                        Information Architecture
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Using the data gathered in our marketing research and by working
                        hand-in-hand with the client. We consolidated and created a site map, to
                        visualize the entire user path while using the app . It was decided that the
                        app features for customers will be consistent across sectors.
                    </Text>
                </Col>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageFedArchitecture.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto pb-5">
                    <Heading sx={styles.titlePhase}>
                        PHASE 2
                    </Heading>
                    <Heading sx={styles.title}>
                        Design Process
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        We started by creating wireframes of what the app experience could look
                        like. We used these wireframes to validate what FED wanted and gave
                        them an idea of the direction we were heading in the design process.
                    </Text>
                </Col>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageFedDesign.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto py-5">
                    <Heading sx={styles.title}>
                        UX | UI Design
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        From the beginning we knew that the overall user experience in the FED
                        app should be easy and pleasing to use. The team decided to keep the
                        user interface simple using proper navigation to direct the user to the
                        right spot and mainly have the brand colour used throughout the design.
                    </Text>
                    <Image
                        src={data.ImageFedUIUX.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                    <Heading sx={styles.title}>
                        Icons
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        When it came to designing navigation within FED app, the team came up
                        with a unique idea to use icons to help users rapidly identify the different
                        sections the app had to offer.
                    </Text>
                    <Image
                        src={data.ImageFedIcon.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                    <Heading sx={styles.titlePhase}>
                        PHASE 3
                    </Heading>
                    <Heading sx={styles.title}>
                        Build
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        We helped FED to simplify data management within their networks
                        through giving them access to resources and have control over the meal
                        kit ordering system by knowing when and how they share information
                        with FED app users.
                    </Text>
                    <Heading sx={styles.title}>
                        WebPortal
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        We developed a FED web portal, that granted personalized data access
                        and communication across corporate, admin, site managers and customers. This portal allowed the filtering of information and tools to target
                        identified user groups and roles. Allowing staff users to tailor the portal
                        for the end-users and to see the entire ordering procedure.We used API
                        as the middleware between the webportal and the mobile application.
                    </Text>
                </Col>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageFedPortal.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto py-5">
                    <Heading sx={styles.title}>
                        Android + iOS Compatible
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Due to the large amount of individuals using the mobile application, it was
                        important for FED to offer an app that worked across multiple platforms.
                        Both Android and iOS are compatible, we developed an app in which the
                        process from start to finish was the quickest and easiest possible.
                    </Text>
                    <Heading sx={styles.titlePhase}>
                        PHASE 4
                    </Heading>
                    <Heading sx={styles.title}>
                        Test and Deploy
                    </Heading>
                    <Heading sx={styles.titlePhase}>
                        In 3 Months We Delivered a Mobile App + WebPortal Launch!!
                    </Heading>
                </Col>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageFedDeploy.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                </Col>
            </Container>
        </Box >
    );
};

export default FedDetail;

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
        color: '#ef9821',
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
