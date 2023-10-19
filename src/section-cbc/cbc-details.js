/** @jsx jsx */
import Image from 'components/image';
import { graphql, useStaticQuery } from 'gatsby';
import { Col } from 'react-bootstrap';
import { Box, Container, Heading, Text, jsx } from 'theme-ui';


const CBCDetail = () => {
    const data = useStaticQuery(graphql`
    query {
      Imagecbc: file(relativePath: { eq: "cbc.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImagecbcDesign: file(relativePath: {eq: "cbc-design.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
      ImagecbcUIUX: file(relativePath: {eq: "cbc-UIUX.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
      ImagecbcIcon: file(relativePath: {eq: "cbc-icon.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG], quality: 100)
        }
      }
      ImagecbcDeploy: file(relativePath: {eq: "cbc-deploy.png"}) {
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
                        src={data.Imagecbc.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="cbc"
                        className="rounded"
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto mb-5">
                    <Heading sx={styles.title}>
                        About The Organization
                    </Heading>
                    <Text as="p" sx={styles.summary}>
                        We worked with The Canadian Broadcasting Corporation (CBC) to help create
                        CBC Emojis. Bringing Canadians with emojis of all their favourite characters
                        and personalities from CBC TV broadcasting and live radio into their conversations.
                        As well as other symbols that celebrate Canadian broadcasting.
                    </Text>
                    <Heading sx={styles.title}>
                        The Challenge
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        The CBC Emojis is one of the many innovative
                        digital experiences offered by CBC. In 2015,
                        emoji culture exploded into the global mainstream.
                        Emojis became an increasingly rich
                        form of communication between all ages,
                        one that transcended linguistic borders.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        As CBC team noticed this trend, they saw the
                        opportunity to embrace mobile and find a
                        partner to help them do it right. The team
                        turned to AdelphaTech to lay the foundation
                        and design the Emojis App for iOS and Android.
                    </Text>
                    <Heading sx={styles.title}>
                        The Process
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Starting up we identify goals, priorities, user stories and ideal features. We
                        did this by having a conversations with the client. Through this process we
                        were able to uncover insights like the people who would likely use this app,
                        the two distinct audiences, the user experience while
                        using the app and social sharing.
                    </Text>
                    <Heading sx={styles.title}>
                        Designing For The Type Of Users
                    </Heading>
                    <Heading sx={styles.title}>
                        Loyal Audience
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-transparent">The average Canadian family, 40-year old married
                                couple with children</li>
                            <li class="list-group-item bg-transparent">Part of the Xennial Generation
                                They've experienced an analogue childhood and
                                a digital adulthood</li>
                            <li class="list-group-item bg-transparent">Constant viewer of various shows in CBC network</li>
                        </ul>
                    </Text>
                    <Heading sx={styles.title}>
                        Young Professionals
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-transparent">Young people in their 20s and 30s</li>
                            <li class="list-group-item bg-transparent">Strongly attached to technology and media and are
                                targeted by makers of those products</li>
                            <li class="list-group-item bg-transparent">Potential new audience</li>
                        </ul>
                    </Text>
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto pb-5">
                    <Heading sx={styles.title}>
                        Design Process
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        We started by creating wireframes of what the app experience could look
                        like. We used these wireframes to validate what CBC wanted and gave them
                        an idea of the direction we were heading in the design process.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        It was our goal to create emojis that gave CBC’s loyal audience and the potential
                        new audience of young professionals to explore the world of CBC at
                        their fingertips fully and in a memorable way.
                    </Text>
                </Col>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImagecbcDesign.childImageSharp.gatsbyImageData}
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
                        Bringing Canadians with emojis of all their favourite characters and personalities
                        from CBC TV broadcasting and live radio into their conversations.
                    </Text>
                    <Image
                        src={data.ImagecbcUIUX.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                    <Heading sx={styles.title}>
                        Keyboard
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        From the beginning, we knew that having an emoji keyboard would be an important
                        part of the user experience for this application. We knew that people
                        would want to install the app and immediately install their emoji keyboard to
                        their mobile devices.
                    </Text>
                    <Image
                        src={data.ImagecbcIcon.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                    <Heading sx={styles.title}>
                        Android + iOS Compatible
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        It was important to CBC to offer an app that worked across multiple devices
                        and platforms. Both Android and iOS compatible, we developed an easy process
                        for the user to rapidly install the keyboard and go on using the CBC
                        emojis in their daily conversations.
                    </Text>
                    <Heading sx={styles.titlePhase}>
                        In 2 Months We Delivered The Mobile App Launch!!
                    </Heading>
                </Col>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImagecbcDeploy.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                </Col>
            </Container>
        </Box >
    );
};

export default CBCDetail;

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
        color: '#ec1c23',
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
