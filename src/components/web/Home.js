import React from 'react'
import data from '../../assets/home-page-data'

import {BuyContactUs, Section, SectionMiddle, SectionYoutubeLeft} from '../common/PageSections'
import Footer from "../common/Footer";
import Header from "../common/Header";
import {Helmet} from "react-helmet";

const SECTION_1_ID = "section1";

const Home = () => (
    <div>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>Toy Truck</title>
            <meta name="keywords" content="Tatra, tipper truck, dump truck, toy truck, toys"/>
            <meta name="description" content="The best place to buy high quality 72cm toy dump trucks."/>
            <meta property="og:title" content="Toy Truck" />
            <meta property="og:url" content="https://toy-truck.co.uk" />
            <meta property="og:type" content="website"/>
            <meta name="og:email" content="info@toy-truck.co.uk"/>
            <script type="application/ld+json">{`
                {
                  "@context": "http://schema.org",
                  "@type": "Organization",
                  "url": "https://toy-truck.co.uk",
                  "logo": "https://toy-truck.co.uk/static/img/logo.png",
                  "email": "mailto:info@toy-truck.co.uk"
                }
            `}
            </script>
        </Helmet>
        <Header headerData={data.header} linkTo={SECTION_1_ID}/>
        <Section id={SECTION_1_ID} sectionData={data.sections.intro}/>
        <SectionMiddle sectionData={data.sections.label1}/>
        <Section sectionData={data.sections.heavyDuty}/>
        <Section sectionData={data.sections.safetyFirst}/>
        <Section sectionData={data.sections.materials}/>
        <Section sectionData={data.sections.ageLimit}/>
        <Section sectionData={data.sections.madeInEU}/>
        <SectionMiddle sectionData={data.sections.label2}/>
        <SectionYoutubeLeft sectionData={data.sections.comePlayWithUsVideo}/>
        <BuyContactUs sectionData={data.contactUs}/>
        <Footer/>
    </div>
);

export default Home
