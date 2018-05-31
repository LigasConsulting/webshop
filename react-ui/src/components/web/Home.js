import React from 'react'
import data from '../../assets/home-page-data'

import {Footer, Header, SectionLeft, SectionRight} from '../common/PageSections'

const Home = () => (
    <div>
        <Header headerData = {data.header}/>
        <SectionLeft sectionData={data.sections[0]}/>
        <SectionRight sectionData={data.sections[1]}/>
        <SectionLeft sectionData={data.sections[2]}/>
        <Footer footerData={data.footer}/>
    </div>
);

export default Home
