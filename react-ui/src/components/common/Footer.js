import React from 'react'
import data from '../../assets/home-page-data'

const Footer = (props) => (
    <footer className={"py-5 bg-black"}>
        <div className={"container"}>
            <p className={"m-0 text-center text-white small"}>{data.footer.copyright}</p>
            <p className={"m-0 text-center text-white small"}>
                <a href={`mailto:${data.footer.email}`}>
                    {data.footer.email}
                </a>
            </p>
        </div>
    </footer>
);


export default Footer
