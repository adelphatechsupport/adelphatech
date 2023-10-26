/** @jsx jsx */
import Image from 'components/image';
import { graphql, useStaticQuery } from 'gatsby';
import { Col } from 'react-bootstrap';
import { Box, Container, Heading, Text, jsx } from 'theme-ui';


const InstasizeDetail = () => {
    const data = useStaticQuery(graphql`
    query {
      Imageinstasize: file(relativePath: { eq: "instasize.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageinstasizeDesign: file(relativePath: {eq: "instasize-design.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
      ImageinstasizeUIUX: file(relativePath: {eq: "instasize-UIUX.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
      ImageinstasizeIcon: file(relativePath: {eq: "instasize-icon.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
      ImageinstasizeDeploy: file(relativePath: {eq: "instasize-deploy.png"}) {
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
                        src={data.Imageinstasize.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Instasize"
                        className="rounded"
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto mb-5">
                    <Heading sx={styles.title}>
                        About The Organization
                    </Heading>
                    <Text as="p" sx={styles.summary}>
                        We worked with InstaSize to help create InstaSize Photo & Pic Editor. The
                        only app to combine a photo editor, collage maker, and video editor into
                        an easy to use interface.
                    </Text>
                    <Heading sx={styles.title}>
                        The Challenge
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Back in 2012, InstaSize saw a problem that
                        no one else cared enough to fix. Facebook,
                        Twitter and especially Instagram all required
                        to crop beautiful portrait or landscape
                        photos and fit them within their designated
                        square avatar space.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        As Instasize team noticed this problem, they
                        saw the opportunity to embrace mobile and
                        find a partner to help them do it right. The
                        team turned to AdelphaTech to lay the foundation and design the InstaSize App for iOS
                        and Android.
                    </Text>
                    <Heading sx={styles.title}>
                        The Process
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Starting up we identified goals, priorities, user stories and ideal features.
                        We did this by having conversations with the client. Through this process
                        we were able to find a solution to the problem, but also bring other features that potentially could enhance the user experience while using the
                        app and by sharing their photos in their social media platforms.
                    </Text>
                    <Heading sx={styles.titlePhase}>
                        Designing For The Type Of Users
                    </Heading>
                    <Heading sx={styles.title}>
                        Content Creator
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-transparent">Photo sharing contributors to digital media for an
                                audience in specific contexts.</li>
                            <li class="list-group-item bg-transparent">Every day use and posting relevant content</li>
                            <li class="list-group-item bg-transparent">Visual storytellers, theme based feed</li>
                        </ul>
                    </Text>
                    <Heading sx={styles.title}>
                        Young Professionals
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-transparent">Young people in their 20s and 30s, especially women</li>
                            <li class="list-group-item bg-transparent">Strongly attached to technology and media</li>
                            <li class="list-group-item bg-transparent">Enjoy personal photo sharing</li>
                        </ul>
                    </Text>
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto pb-5">
                    <Heading sx={styles.title}>
                        Design Process
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Instasize had a previous version developed, but here in AdelphaTech we
                        decided to rebuild the application. Inspired by the previous appearance,
                        we started by creating wireframes of what the app experience could look
                        like. We used these wireframes to validate what Instasize wanted and
                        gave them an idea of the direction we were heading in the design process.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        It was our goal to create an app providing  tools, technology and community that every content creator needs to boost their influence, build their
                        brand and find their voice.
                    </Text>
                </Col>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageinstasizeDesign.childImageSharp.gatsbyImageData}
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
                        From the beginning we knew that the overall experience of the user using
                        Instasize should be easy and pleasing to use. The team decided to keep
                        the user interface simple, minimal and only showcase the brand colours.
                    </Text>
                    <Image
                        src={data.ImageinstasizeUIUX.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                    <Heading sx={styles.title}>
                        Icons
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        When it came to designing navigation within InstaSize app, the team came
                        up with a unique idea to use icons to help users
                        rapidly identify the tools featured.
                    </Text>
                    <Image
                        src={data.ImageinstasizeIcon.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                    <Heading sx={styles.title}>
                        Android + iOS Compatible
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        It was important to Instasize to offer an app that worked across multiple
                        devices and platforms. Both Android and iOS are compatible, we developed an app that solved an issue which many content creators and social
                        media users were struggling to fix. The easy process to size, edit pictures
                        and immediately post to any social media platform made Instasize an indispensable app to have.
                    </Text>
                    <Heading sx={styles.titlePhase}>
                        In 2 Months We Delivered The Mobile App Launch!!
                    </Heading>
                </Col>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageinstasizeDeploy.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                </Col>
            </Container>
        </Box >
    );
};

export default InstasizeDetail;

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
