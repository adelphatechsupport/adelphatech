import Layout from 'components/layout';
import Seo from 'components/seo';
import React from 'react';
import Banner from '../section-case-studies/banner';
import Partners from '../sections/partners';
import Work from '../section-case-studies/casestudies';
import Subscribe from '../sections/subscribe';


export default function CaseStudiesPage() {
    return (
        <Layout>
            <Seo
                title="AdelphaTech"
                description="is a leading web & mobile application development firm based in Toronto, Canada that offers custom web, and mobile app development services."
            />
            <Banner />
            <Partners />
            <Work />
            <Subscribe />
        </Layout>
    )
};
