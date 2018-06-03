import React from 'react';
import LazyHero from 'react-lazy-hero';

const Hero = () => {
    return (
        <div>
            <LazyHero imageSrc="http://mojetatra.cz/wp-content/uploads/2016/11/tatra-old-school-6.jpg">
                <h1>Generic Startup Hype Headline</h1>
            </LazyHero>
        </div>
    );
};

const withHero = WrappedComp => props => (
    <div>
        <Hero/>
        <WrappedComp {...props} />
    </div>
);

export {Hero, withHero};
export default Hero;
