import React from 'react'
import data from '../../assets/home-page-data'

import {SectionLeft, SectionRight} from '../common/PageSections'
import Footer from "../common/Footer";
import Header from "../common/Header";

const SECTION_1_ID = "section1";

const Home = () => (
    <div>
        <Header headerData = {data.header} linkTo={SECTION_1_ID}/>
        <SectionLeft id={SECTION_1_ID} sectionData={data.sections[0]}/>
        <SectionRight sectionData={data.sections[1]}/>
        <SectionLeft sectionData={data.sections[2]}/>
        <SectionRight sectionData={data.sections[3]}/>
        <Footer/>
    </div>
);

export default Home
