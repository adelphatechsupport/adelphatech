/** @jsx jsx */
import { Box, Container, Heading, Text, jsx } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Svg from "react-inlinesvg"
import React, { useEffect, useState } from 'react';
import LongArrow from "../assets/images/LongArrow.svg"
import Place from "../assets/images/Place.svg"
import ReactPaginate from "react-paginate"
import { Link } from "gatsby"

const OurVacancies = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    function Items(props) {
        useEffect(() => console.log("currentItems", props?.currentItems), [])
        return (
            <>
                {props?.currentItems &&
                    props?.currentItems.map(item => (
                        <Col xl="4" lg="4" md="12" className="mb-4">
                            <Card className="border-0 shadow-none h-100">
                                <Card.Body>
                                    <p className="fw-bold text-dark">{item.departement}</p>
                                    <p className="fw-normal text-dark">{item.subtitle}</p>
                                </Card.Body>
                                <Card.Footer className="pt-0 border-0">
                                    <p className="fs-14 text-dark">
                                        <span className="pe-1">
                                            <Svg
                                                src={Place}
                                                height="auto"
                                                title="Menu"
                                                className="mb-1"
                                            />
                                        </span>
                                        {item.city}, {item.location}
                                    </p>
                                    <Link to="" className="learn-more AdelphaTech-primary mb-2">
                                        Learn More
                                        <span className="ps-2">
                                            <Svg src={LongArrow} title="Menu" />
                                        </span>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
            </>
        )
    }
    function PaginatedItems({ itemsPerPage, list }) {
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState([])
        const [pageCount, setPageCount] = useState(0)
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0)

        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage
            console.log(`Loading items from ${itemOffset} to ${endOffset}`)
            setCurrentItems(list.slice(itemOffset, endOffset))
            setPageCount(Math.ceil(list.length / itemsPerPage))
        }, [itemOffset, itemsPerPage])

        // Invoke when user click to request another page.
        const handlePageClick = event => {
            const newOffset = (event.selected * itemsPerPage) % items.length
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            )
            setItemOffset(newOffset)
        }

        return (
            <>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </>
        )
    }
    const locations = [
        {
            name: "Canada",
        },
        {
            name: "France",
        },
        {
            name: "Morocco",
        },
    ]
    const [cardjob, setcardjob] = useState([
        {
            departement: "Software Development",
            subtitle: "Middle Angular+ Node.js Developer",
            location: "Canada",
            city: "Toronto",
        },
        {
            departement: "Software Development",
            subtitle: "Middle Angular+ Node.js Developer",
            location: "France",
            city: "Paris",
        },
        {
            departement: "Software Development",
            subtitle: "Middle React + Node.js Developer",
            location: "Morocco",
            city: "Rabat",
        },
        {
            departement: "Software Development",
            subtitle: "Senior .NET + Angular Developer",
            location: "Canada",
            city: "Toronto",
        },
        {
            departement: "Software Development",
            subtitle: "Middle Angular+ Node.js Developer",
            location: "Morocco",
            city: "Rabat",
        },
        {
            departement: "Business Analysis",
            subtitle: "Senior Business Analyst",
            location: "Morocco",
            city: "Rabat",
        },
        {
            departement: "Project Management",
            subtitle: "Project Manager",
            location: "France",
            city: "Paris",
        },
        {
            departement: "QA & Testing",
            subtitle: "Middle QA Manual Engineer",
            location: "Canada",
            city: "Toronto",
        },
        {
            departement: "Cloud & DevOps",
            subtitle: "Middle / Senior DevOps",
            location: "Morocco",
            city: "Rabat",
        },
    ])
    const [cardjobfilter, setcardjobfilter] = useState([
        {
            departement: "Software Development",
            subtitle: "Middle Angular+ Node.js Developer",
            location: "Canada",
            city: "Toronto",
        },
        {
            departement: "Software Development",
            subtitle: "Middle Angular+ Node.js Developer",
            location: "France",
            city: "Paris",
        },
        {
            departement: "Software Development",
            subtitle: "Middle React + Node.js Developer",
            location: "Morocco",
            city: "Rabat",
        },
        {
            departement: "Software Development",
            subtitle: "Senior .NET + Angular Developer",
            location: "Canada",
            city: "Toronto",
        },
        {
            departement: "Software Development",
            subtitle: "Middle Angular+ Node.js Developer",
            location: "Morocco",
            city: "Rabat",
        },
        {
            departement: "Business Analysis",
            subtitle: "Senior Business Analyst",
            location: "Morocco",
            city: "Rabat",
        },
        {
            departement: "Project Management",
            subtitle: "Project Manager",
            location: "France",
            city: "Paris",
        },
        {
            departement: "QA & Testing",
            subtitle: "Middle QA Manual Engineer",
            location: "Canada",
            city: "Toronto",
        },
        {
            departement: "Cloud & DevOps",
            subtitle: "Middle / Senior DevOps",
            location: "Morocco",
            city: "Rabat",
        },
    ])
    function FilterChange() {
        if (FilterBy.length > 0) {
            setcardjobfilter(
                cardjob.filter(a =>
                    FilterBy.some(
                        element => a.departement === element || a.location === element
                    )
                )
            )
        } else {
            setcardjobfilter(cardjob)
        }
    }
    const [FilterBy, setFilterBy] = useState([])
    const isLanguage = typeof window !== "undefined"
    return (
        <Box as="section" id="Vacancies" sx={styles.section} className='job-section'>
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    className="text-center"
                    slogan='Our Vacancies'
                />
                <Heading sx={styles.title}>
                    are you looking for a place to apply your talents? <br /> discover our current jobs openings
                </Heading>
                <Row>
                    <Col xl="3" lg="4" md="12" className="filter-des">
                        <Col xl="12">
                            <h5 className="mb-3 text-dark">Locations:</h5>
                            {locations.map(location => (
                                <div className="mb-4 d-flex flex-wrap">
                                    <Form.Check
                                        type="checkbox"
                                        className="f-light"
                                        onClick={() => {
                                            var find = FilterBy.filter(
                                                item => item === location.name
                                            ).length
                                            var list = FilterBy
                                            if (find === 0) {
                                                list.push(location.name)
                                                setFilterBy(list)
                                            } else {
                                                const index = list.indexOf(location.name)
                                                if (index > -1) {
                                                    list.splice(index, 1)
                                                    setFilterBy(list)
                                                }
                                            }
                                            FilterChange()
                                        }}
                                    />
                                    <Form.Label className="ps-2 f-light">{location.name}</Form.Label>
                                </div>
                            ))}
                        </Col>
                    </Col>
                    <Col xl="9" lg="8" md="12">
                        <Row>
                            <PaginatedItems itemsPerPage={6} list={cardjobfilter} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Box>
    );
};

export default OurVacancies;

const styles = {
    section: {
        backgroundColor: "#fff",
        pt: [7, null, null, 6, null, null, 8],
        pb: [0, null, null, 8, null, null, 5],
    },
    grid: {
        display: ['flex', null, null, 'grid'],
        flexDirection: ['column-reverse', null, null, 'unset'],
        gap: '0 30px',
        alignItems: 'center',
        gridTemplateColumns: [
            '1fr',
            null,
            null,
            '1fr',
            '1fr 1fr',
            '600px 1fr',
            '760px 1fr',
        ],
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

};
