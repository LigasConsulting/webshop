import React from 'react'
import data from '../../assets/home-page-data'
import {SocialIcon} from "react-social-icons";
import {Container} from "reactstrap";

const Footer = (props) => (
    <footer className={"py-5 bg-black"}>
        <Container>
            <p className={"text-center text-white small"}>{data.footer.copyright}</p>
            <p className={"text-center text-white small"}>
                <a href={`mailto:${data.footer.email}`}>
                    {data.footer.email}
                </a>
            </p>
            <div className={'text-center'}>
                <SocialIcon network={'twitter'} url={'https://twitter.com/toytruck2'} />&nbsp;
                <SocialIcon network={'facebook'} url={'https://fb.me/toytruckcouk'} />&nbsp;
                <SocialIcon network={'instagram'} url={'https://www.instagram.com/toytruckcouk/'} />
            </div>
        </Container>
    </footer>
);


export default Footer
