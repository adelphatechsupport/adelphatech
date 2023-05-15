import React, { useEffect } from 'react';
import Seo from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import CustomerSupport from 'sections/customer-support';
import Pricing from 'sections/pricing';
import Support from 'sections/support';
import Clients from 'sections/clients';
import Blog from 'sections/blog';
import Faq from 'sections/faq';
import Partners from '../sections/partners';
import TestimonialCard from "../sections/testimonial"
import 'react-multi-carousel/lib/styles.css';
import Subscribe from '../sections/subscribe';
export default function IndexPage() {
  useEffect(() => {
    var ele = document.querySelectorAll(".nav-item");
    ele.forEach(element => {
      element.classList.add("not-sticky");
    });
  }, []);
  return (
    <Layout>
      <Seo
        title="Adelphatech"
        description="is a leading web & mobile application development firm based in Toronto, Canada that offers custom web, and mobile app development services."
      />
      <Banner />
      <Partners />
      <CustomerSupport />
      <Blog />
      <UltimateFeatures />
      <TestimonialCard />
      {/* <Pricing /> */}
      {/* <Support />
      <Clients /> */}
      <Subscribe />
      {/* <Faq /> */}
    </Layout>
  );
}
