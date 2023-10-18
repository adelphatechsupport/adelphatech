import Layout from 'components/layout';
import Seo from 'components/seo';
import React from 'react';
import Blog from 'sections/blog';
import DeliveryEaseDetail from '../section-deliveryease/deliveryease-details';
import Banner from '../section-deliveryease/banner';

export default function WorkPage() {
    return (
        <Layout>
            <Seo
                title="AdelphaTech"
                description="is a leading web & mobile application development firm based in Toronto, Canada that offers custom web, and mobile app development services."
            />
            <Banner />
            <DeliveryEaseDetail />
            <Blog />
        </Layout>
    )
};