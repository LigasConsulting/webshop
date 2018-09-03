import React from 'react'
import data from '../../assets/home-page-data'

import {BuyContactUs, Section, SectionMiddle, SectionYoutubeLeft} from '../common/PageSections'
import Footer from "../common/Footer";
import Header from "../common/Header";

const SECTION_1_ID = "section1";

const Home = () => (
    <div>
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
