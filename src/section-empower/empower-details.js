/** @jsx jsx */
import Image from 'components/image';
import { graphql, useStaticQuery } from 'gatsby';
import { Col } from 'react-bootstrap';
import { Box, Container, Heading, Text, jsx } from 'theme-ui';


const EmpowerDetail = () => {
    const data = useStaticQuery(graphql`
    query {
      ImageEmpower: file(relativePath: { eq: "empower.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
      ImageEmpowerEcosystem: file(relativePath: {eq: "empower-ecosystem.png"}) {
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
                        src={data.ImageEmpower.childImageSharp.gatsbyImageData}
                        loading="lazy"
                        alt="Empower"
                        className="rounded"
                    />
                </Col>
                <Col xl="7" lg="7" md="10" className="mx-auto mb-5">
                    <Text as="p" sx={styles.summary}>
                        Empower Data Logistics is the answer to revolutionizing the $200 billion freight shipping industry. We've honed our focus on the 900,000+ owner-operated trucking companies with less than 5 trucks. In today's technology-driven landscape, we're changing the game by delivering cutting-edge technology at a fraction of the cost of our competitors.
                    </Text>
                    <Heading sx={styles.title}>
                        Empower Data Logistics: Your Path to Seamless Supply Chains
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Our universal platform, eMPower, represents 30 years of operational expertise and a breakthrough in uniting the islands of technology scattered throughout the supply chain market. Gone are the days of piecing together outdated information. We provide real-time insights for smarter decision-making, allowing you to manage the flow of goods efficiently.
                    </Text>
                    <Heading sx={styles.title}>
                        The Empower Solution - Setting the Standard
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Quick Connect: Say goodbye to costly and time-consuming software integrations. Our click-and-connect system offers rapid deployment without the hassle of extensive implementations.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Dashboards: We route data connections to intuitive dashboards, unveiling bottlenecks and opportunities in your supply chain. From port delays to in-transit issues, our dashboard empowers you to take prompt action.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Customized Solutions: Your business is unique, and we tailor our reporting, KPIs, and alerts to your specific needs. We're here to help you turn data into business-driving decisions.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Dashboard Search By: Our software sets the rules, continuously recalculating ETAs across key supply chain events. Get real-time data on your order's status and make informed decisions to meet delivery demands.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        First Mile to Last Mile: The TaaP© App provides cost-effective access to shippers and freight providers with real-time GPS tracking. Connect to the eMPower load board for direct access to carriers and the best rates.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        The Paradigm Shift: Experience predictive shipment analytics, in-truck tracking for last-mile visibility, built-in AI for continuous learning, and data-driven decision-making for an optimized supply chain.
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
                        eMPower: Connecting Supply Chain Ecosystems
                    </Heading>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        eMPower helps transportation and logistics-related companies transition from spreadsheets and siloed data sources to a centralized software solution that unlocks critical insights, real-time collaboration, and increased productivity. Our two-way communication system compiles actionable data, enabling you to drive your business without the hassles of file merging and spreadsheet sharing. It's as simple as point, click, and share fresh, real-time data.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        As the supply chain market adapts to current trends, eMPower is poised to lead the way. Expect to see a shift from days or hours of arrival estimates to mere minutes. Predicting when a shipment will reach its destination—be it a port, warehouse, or the end customer—will become a cornerstone of the future supply chain. eMPower offers real-time shipment tracking, including peer-to-peer route arrival times, empowering you to make informed decisions, intervene if necessary, and ensure your shipments meet deadlines.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        eMPower simplifies complex decision-making processes with real-time dashboards and alerts, uniting all technology islands in the supply chain under one core system. With over one million small trucking companies in the US, eMPower and our mobile tracking TaaP© App provide consignees and shippers with direct access to routes and ETA's in real-time at no cost to the trucker, and a minimal $5 fee per load to the shipper.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        The eMPower Dashboard seamlessly integrates with the eMPower Load Board, allowing shippers to post loads at their desired prices while enabling truckers to claim them without brokerage fees. Small local fleets and owner-operators can leverage the same technology for residential deliveries, ensuring customers know precisely when to expect their deliveries. Customers can track their shipments in real-time and coordinate receipt.
                    </Text>
                    <Text as="p" sx={styles.summary} className='mb-4'>
                        Dive into eMPower's dynamic global search, presenting your entire global supply chain in real-time on a single screen. Easily drill down to find any PO, order, or shipment anywhere in the world, using search criteria like PO, SKU, references, vessel, container, trailer, buyer, and department.
                    </Text>
                </Col>
            </Container>
        </Box >
    );
};

export default EmpowerDetail;

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
