import React, { useEffect } from 'react';
import Seo from 'components/seo';
import Layout from 'components/layout';
import Banner from '../section-careers/banner';
import ReasonJoin from '../section-careers/reasons-join';
import Subscribe from '../sections/subscribe';
import OurVacancies from '../section-careers/vacancies';
import TalentNetwork from '../section-careers/talent-network';


export default function ContactPage() {
    return (
        <Layout>
            <Seo
                title="Adelphatech"
                description="is a leading web & mobile application development firm based in Toronto, Canada that offers custom web, and mobile app development services."
            />
            <Banner />
            <ReasonJoin />
            <OurVacancies />
            <TalentNetwork />
            <Subscribe />
        </Layout>
    )
};
