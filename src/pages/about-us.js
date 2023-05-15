import React, { useEffect } from 'react';
import Seo from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections-about/banner';
import VideoIntro from '../sections-about/video-intro';
import Services from '../sections-about/services';
import StoryPage from '../sections-about/story';
import Value from '../sections-about/value';
import Subscribe from '../sections/subscribe';

export default function AboutPage() {
    return (
        <Layout>
            <Seo
                title="Adelphatech"
                description="is a leading web & mobile application development firm based in Toronto, Canada that offers custom web, and mobile app development services."
            />
            <Banner />
            <VideoIntro />
            <Services />
            <StoryPage />
            <Value />
            <Subscribe />
        </Layout>
    )
};