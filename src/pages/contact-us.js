import Layout from 'components/layout';
import Seo from 'components/seo';
import React from 'react';
import Banner from "../section-contact/banner";
import ContactForm from '../section-contact/contactForm';


export default function ContactPage() {
    return (
        <Layout>
            <Seo
                title="AdelphaTech"
                description="is a leading web & mobile application development firm based in Toronto, Canada that offers custom web, and mobile app development services."
            />
            <Banner />
            <ContactForm />
        </Layout>
    )
};
