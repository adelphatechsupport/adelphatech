/** @jsx jsx */
import Image from 'components/image';
import { graphql, useStaticQuery } from 'gatsby';
import { Col } from 'react-bootstrap';
import { Box, Container, Heading, Text, jsx } from 'theme-ui';


const DeliveryEaseDetail = () => {
    const data = useStaticQuery(graphql`
    query {
      ImageDelivery: file(relativePath: { eq: "Delivery.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageEmpowerEcosystem: file(relativePath: {eq: "deliveryease-pharma.png"}) {
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
                        src={data.ImageDelivery.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="DeliveryEase"
                        className="rounded"
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto mb-5">
                    <Text as="p" sx={styles.summary}>
                        DeliveryEase: Revolutionizing Medication Delivery
                    </Text>
                    <Heading sx={styles.title}>
                        Your Prescription for Efficient and Convenient Service
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        DeliveryEase has transformed the medication delivery industry with a focus on providing an efficient, convenient, and cost-effective solution. In today's fast-paced world, our platform stands out by delivering essential medications to clients quickly and easily, ensuring they receive the care they need.
                    </Text>
                    <Heading sx={styles.title}>
                        Join the DeliveryEase Team
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Become a DeliveryEase carrier and be a part of our expanding network. We have customers and delivery routes waiting for you! Join us today to help ensure that medications reach those who depend on them.
                    </Text>
                    <Heading sx={styles.title}>
                        Partner with Us
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        If you're a pharmacy or healthcare provider, partnering with DeliveryEase is a straightforward process. Our experienced team is here to guide you through every step, making sure that your patients receive their medications conveniently and on time.
                    </Text>
                </Col>
                <Col xl="9" lg="9" md="10" className='mx-auto'>
                    <Image
                        src={data.ImageEmpowerEcosystem.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Webhelp formation"
                        className=""
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto py-5">
                    <Heading sx={styles.title}>
                        DeliveryEase: Transforming Medication Delivery Services
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        DeliveryEase is revolutionizing the healthcare industry by simplifying the medication delivery process for pharmacies and healthcare providers. We've replaced the complexities of traditional delivery methods with a streamlined software solution that unlocks critical insights, fosters real-time collaboration, and boosts productivity. Our two-way communication system compiles actionable data, allowing you to manage medication deliveries without the hassles of manual processes. It's as easy as a few clicks to share real-time delivery information.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        As the healthcare landscape evolves, DeliveryEase is at the forefront, providing real-time medication delivery estimates that are measured in minutes, not days or hours. Predicting when a medication shipment will reach its destination, whether it's a patient's doorstep or a healthcare facility, is becoming the foundation of modern healthcare logistics. DeliveryEase offers real-time medication tracking, including peer-to-peer route arrival times, empowering healthcare providers to make informed decisions, intervene if necessary, and ensure that essential medications arrive on schedule.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        DeliveryEase simplifies complex decision-making processes with real-time dashboards and alerts, uniting all stakeholders in the medication delivery process under one comprehensive system. With an expanding network of healthcare providers and carriers, DeliveryEase ensures direct access to delivery routes and estimated times of arrival, minimizing costs for both parties. Patients and healthcare providers can leverage the same technology for prescription deliveries, ensuring everyone knows precisely when to expect their medications. Patients can track their medication shipments in real-time and coordinate receipt.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Explore DeliveryEase's dynamic search functionality, which presents your entire medication delivery network in real-time on a single screen. Easily locate any prescription order or shipment with search criteria like patient information, prescription reference, delivery route, and more, ensuring a seamless medication delivery experience.
                    </Text>
                </Col>
            </Container>
        </Box >
    );
};

export default DeliveryEaseDetail;

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
