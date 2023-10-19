import Layout from 'components/layout';
import Seo from 'components/seo';
import React from 'react';
import Blog from 'sections/blog';
import InstasizeDetail from '../section-instasize/instasize-details';
import Banner from '../section-instasize/banner';

export default function InstaSizePage() {
    return (
        <Layout>
            <Seo
                title="AdelphaTech"
                description="is a leading web & mobile application development firm based in Toronto, Canada that offers custom web, and mobile app development services."
            />
            <Banner />
            <InstasizeDetail />
            <Blog />
        </Layout>
    )
};