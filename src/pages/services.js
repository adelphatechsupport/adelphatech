import Layout from 'components/layout';
import Seo from 'components/seo';
import React from 'react';
import Blog from 'sections/blog';
import UltimateFeatures from 'sections/ultimate-features';
import Approach from '../section-services/approach';
import Banner from '../section-services/banner';
import Partners from '../sections/partners';
import Subscribe from '../sections/subscribe';

export default function ServicesPage() {
    return (
        <Layout>
            <Seo
                title="AdelphaTech"
                description="is a leading web & mobile application development firm based in Toronto, Canada that offers custom web, and mobile app development services."
            />
            <Banner />
            <Partners />
            <Approach />
            <UltimateFeatures />
            <Blog />
            <Subscribe />
            
        </Layout>
    )
};
