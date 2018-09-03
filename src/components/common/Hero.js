import React from 'react';
import LazyHero from 'react-lazy-hero';

const Hero = ({className, text, imgSrc}) => {
    return (
        <div className={className}>
            <LazyHero imageSrc={imgSrc}>
                <h1>{text}</h1>
            </LazyHero>
        </div>
    );
};

const withHero = (props) => (WrappedComp) => moreProps => (
    <div>
        <Hero text={props.text} imgSrc={props.imgSrc} className={props.className}/>
        <WrappedComp {...moreProps} />
    </div>
);

export {Hero, withHero};
export default Hero;
