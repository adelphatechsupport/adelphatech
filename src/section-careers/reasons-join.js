import React, { useEffect, useState } from 'react';
import { Box, Container, Heading } from "theme-ui";
import Svg from "react-inlinesvg"
import SectionHeading from "../components/section-heading";
import ArrowRight from "../assets/images/ArrowRight.svg"
import { Link } from "gatsby"

const ReasonJoin = () => {
    const [toggleexpertise, settoggleexpertise] = useState(0)
    const expertise = [
        {
            id: 1,
            title: "Leadership",
            description:
                "Whether you are starting your career or looking to move to the next level, a career at AdelphaTech empowers you to customize a career that works for you.",
        },
        {
            id: 2,
            title: "Innovation Culture",
            description:
                "AdelphaTech people are welcomed to propose their ideas for smarter solutions and encouraged to initiate innovative and efficient practices. Innovation Culture is rooted in open-mindedness, trials and errors and pioneering spirit.",
        },
        {
            id: 3,
            title: "Diversity & Inclusion",
            description:
                "Welcoming people from different cultures is essential to our industry’s future innovation and economic success. Everyone at AdelphaTech is expected to be empathetic and respectful toward differences. We’re also committed to fair-pay practices as well as benefits programs that help people integrate work and life.",
        },
        {
            id: 4,
            title: "Corporate Social Responsability",
            description:
                "We help our customers strengthen the broader social economy by powering an ecosystem of good with our software, services, data intelligence, and expertise.",
        },
    ]

    return (
        <Box as="section" id="ReasonJoin" sx={styles.section} className="Expertise template-3">
            <Container>
                <SectionHeading
                    sx={{ mb: [6, null, null, 2] }}
                    className="text-center"
                    slogan="4 reasons to join AdelphaTech"
                />
                <Heading sx={styles.title}>
                    The four pillars that make AdelphaTech a workplace <br /> where you can be inspired and be inspiring.
                </Heading>
                <div className="template-3-tabs tabs">
                    <div className="tabs-caption">
                        {expertise.map((item, i) => (
                            <div key={i}>
                                <div
                                    className={
                                        toggleexpertise === i
                                            ? "tabs-caption-item active"
                                            : "tabs-caption-item"
                                    }
                                    onClick={() => settoggleexpertise(i)}
                                   
                                >

                                    {item.title}
                                </div>
                                <div
                                    className={
                                        toggleexpertise === i ? "tab-text active" : "tab-text"
                                    }
                                >
                                    <p>
                                        {item.description}
                                    </p>
                                    <Link to="/case-studies" className="rounded-arrow">
                                        <Svg
                                            src={ArrowRight}
                                            title="Menu"
                                            className=""
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {expertise.map((item, i) => (
                        <div
                            className={
                                toggleexpertise === i
                                    ? "tabs-content tab-content active"
                                    : "tabs-content tab-content"
                            }
                            key={i}
                        >
                            <div className="tab-content-title">{item.title}</div>
                            <div className="tab-content-text ps">
                                <p>{item.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Box>
    );
};

export default ReasonJoin;
const styles = {
    section: {
        backgroundColor: "#fff",
        pt: [7, null, null, 6, null, null, 6],
        pb: [0, null, null, 8, null, null, 5],
    },
    title: {
        color: 'heading',
        fontWeight: 700,
        fontSize: [5, null, null, 10, null, 6],
        lineHeight: 1.2,
        letterSpacing: ['-0.5px', null, null, '1px'],
        textAlign: ['center', null, null, 'center'],
        span: {
            backgroundSize: 'cover',
            px: 2,
        },
        mb: 12,
    },
}