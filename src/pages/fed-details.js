import Layout from 'components/layout';
import Seo from 'components/seo';
import React from 'react';
import Blog from 'sections/blog';
import FedDetail from '../section-fed/fed-details';
import Banner from '../section-fed/banner';

export default function FedPage() {
    return (
        <Layout>
            <Seo
                title="AdelphaTech"
                description="is a leading web & mobile application development firm based in Toronto, Canada that offers custom web, and mobile app development services."
            />
            <Banner />
            <FedDetail />
            <Blog />
        </Layout>
    )
};