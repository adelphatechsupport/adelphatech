/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import Post from 'components/cards/post';

import news1 from '../assets/images/blog/1.png';
import news2 from '../assets/images/blog/2.png';
import news3 from '../assets/images/blog/3.png';
import news4 from '../assets/images/blog/4.png';

const data = [
  {
    id: 1,
    image: news1,
    title: 'International Schools Services',
    desc:
      '',
    link: '/case-studies',
  },
  {
    id: 2,
    image: news2,
    title:
      'Kensington Health',
    desc: '',
    link: '/case-studies',
  },
  {
    id: 3,
    image: news3,
    title: 'Webhelp',
    desc: '',
    link: '/work-details',
  },
  {
    id: 4,
    image: news4,
    title: 'Tutor Doctor',
    desc: '',
    link: '/case-studies',
  },
];

const masonryOptions = {
  originTop: false,
};

const Blog = () => {
  return (
    <section id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 14] }}
          slogan="Our work"
          title="We assist our partners in achieving success through the development of top-notch websites, web and mobile apps."
        />
        <Masonry sx={styles.masonry} options={masonryOptions}>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default Blog;

const styles = {
  section: {
    backgroundColor: '#fff',
    pt: [6, null, null, null, 2, 10, 14],
    pb: [2, null, null, null, 6, 10, 14],
  },
  masonry: {
    maxWidth: 1250,
    mx: [-3, null, null, null, 'auto'],
  },
};
