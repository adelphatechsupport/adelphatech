import React from 'react';

import Layout from 'components/layout';
import Seo from 'components/seo';
import { Box, Link } from 'theme-ui';
import Logo from 'components/logo';
import { Container } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <>
      <Seo title="404: Not found" />
      <Container fluid={true} className='bg-white'>
        <Box sx={styles.NotFoundPage}>
          <Logo sx={styles.logo} />
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <a href='/'>
            <Link sx={styles.CTA} className="rounded-0 hbtn slide_right" >Back Home</Link>
          </a>
        </Box>
      </Container>
    </>
  )
};

export default NotFoundPage;

const styles = {
  NotFoundPage: {
    color: "#000",
    background: "#fff",
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    mb: [null, null, null, null, "30px !important", 10],
  },
  CTA: {
    color: "#000 !important",
    ':hover': {
      color: "#fff !important"
    }
  }
}