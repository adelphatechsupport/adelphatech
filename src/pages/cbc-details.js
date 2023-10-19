import Layout from 'components/layout';
import Seo from 'components/seo';
import React from 'react';
import Blog from 'sections/blog';
import Banner from '../section-cbc/banner';
import CBCDetail from '../section-cbc/cbc-details';

export default function CBCPage() {
    return (
        <Layout>
            <Seo
                title="AdelphaTech"
                description="is a leading web & mobile application development firm based in Toronto, Canada that offers custom web, and mobile app development services."
            />
            <Banner />
            <CBCDetail />
            <Blog />
        </Layout>
    )
};