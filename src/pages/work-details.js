import Layout from 'components/layout';
import Seo from 'components/seo';
import React from 'react';
import Banner from '../section-work-details/banner';
import Blog from 'sections/blog';
import BlogDetail from '../section-work-details/blog-details';

export default function WorkPage() {
    return (
        <Layout>
            <Seo
                title="Adelphatech"
                description="is a leading web & mobile application development firm based in Toronto, Canada that offers custom web, and mobile app development services."
            />
            <Banner />
            <BlogDetail />
            <Blog />
        </Layout>
    )
};