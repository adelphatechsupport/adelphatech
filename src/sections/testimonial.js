/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import Avatar1 from '../assets/testimonial/avatar1.jpg';
import Avatar2 from '../assets/testimonial/avatar2.jpg';
import Avatar3 from '../assets/testimonial/avatar3.jpg';
import Avatar4 from '../assets/testimonial/avatar4.jpg';

const data = [
  {
    id: 1,
    title: 'International Schools Services',
    description:
      ' Consultancies are often an unknown, and you never know what your actual experience will be. Adelphatech has exceeded our expectations by performing work at a high level of competence, within budget, ahead of schedule.',
    avatar: Avatar1,
    name: 'Malcolm S.',
    designation: 'CIO, ISS',
    review: 4,
  },
  {
    id: 2,
    title: 'Deloitte',
    description:
      'AdelphaTech has been a tremendous help to my team at Deloitte. As part of our innovation agenda, we are working on developing technology that opens up new business models for Deloitte.',
    avatar: Avatar2,
    name: 'Matthew S.',
    designation: 'Team Lead, Deloitte',
    review: 5,
  },
  {
    id: 3,
    title: 'University Health Network',
    description:
      'AdelphaTech provides high quality service, attention to detail, and insightful observations when working on a project. I would not hesitate to recommend AdelphaTech for any project.',
    avatar: Avatar3,
    name: 'Richard .C',
    designation: 'Director of IT, PMCF',
    review: 5,
  },
  {
    id: 4,
    title: 'InstaSize',
    description:
      'Our app has millions of users and so the team working with us had to be top-of-the-line. AdelphaTech has delivered a terrific mobile app on-time and on-budget. The customer service was excellent as we went through the complicated process of porting from iOS to Android.',
    avatar: Avatar4,
    name: 'Eddy H.',
    designation: 'COO, InstaSize',
    review: 4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
  return (
    <section id="testimonial" sx={styles.section}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeading
          sx={styles.heading}
          slogan="Partner Testimonials"
          title="Our partners are with us for the long term. "
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
                <Rating rating={item.review} />
                <Heading as="h3" sx={styles.title}>
                  {item.title}
                </Heading>
                <Text sx={styles.description}>{item.description}</Text>
                <div className="card-footer">
                  <div className="image">
                    <Image src={item.avatar} alt="Client Image" />
                  </div>
                  <div className="reviewer-info">
                    <Heading as="h4" sx={styles.heading}>
                      {item.name}
                    </Heading>
                    <Text sx={styles.designation}>{item.designation}</Text>
                  </div>
                </div>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#fff',
    pt: [8, null, null, null, 10, 17],
    pb: [8, null, null, null, 10, 16],
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '0px'],
      ml: 'auto',
      '.react-multi-carousel-track ':{
        pb: '60px',
      },
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    height:'100%',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 5px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
        pb:'10px'
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'dark',
    lineHeight: 1.6,
    fontFamily: 'headingAlt',
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'dark',
    lineHeight: [1.85, null, 2],
    fontFamily: 'headingAlt',
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'dark',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '600',
    fontSize: 1,
    lineHeight: 1.4,
    fontFamily: 'headingAlt',
  },
};
