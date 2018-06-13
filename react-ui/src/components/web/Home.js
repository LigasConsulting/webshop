import React from 'react'
import data from '../../assets/home-page-data'

import {SectionLeft, SectionRight, SectionYoutubeLeft} from '../common/PageSections'
import Footer from "../common/Footer";
import Header from "../common/Header";

const SECTION_1_ID = "section1";

const Home = () => (
    <div>
        <Header headerData = {data.header} linkTo={SECTION_1_ID}/>
        <SectionLeft id={SECTION_1_ID} sectionData={data.sections.heavyDuty}/>
        <SectionRight sectionData={data.sections.madeInEU}/>
        <SectionLeft sectionData={data.sections.safetyFirst}/>
        <SectionYoutubeLeft sectionData={data.sections.comePlayWithUsVideo}/>
        <SectionRight sectionData={data.sections.contactUs}/>
        <Footer/>
    </div>
);

export default Home
