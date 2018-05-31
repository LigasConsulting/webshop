import React from 'react'

const Header = () => (
    <header className="masthead text-center text-white d-flex">
        <div className="container my-auto">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h1 className="text-uppercase">
                        <strong>Your Favorite Source of Free Bootstrap Themes</strong>
                    </h1>
                    <hr/>
                </div>
                <div className="col-lg-8 mx-auto">
                    <p className="text-faded mb-5">Start Bootstrap can help you build better websites using the
                        Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                </div>
            </div>
        </div>
    </header>
);


const SectionLeft = () => (
    <section>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2">
                    <div className="p-5">
                        <img className="img-fluid rounded-circle"
                             src="https://mojetatra.cz/wp-content/uploads/2016/11/tatra-72-pink.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                    <div className="p-5">
                        <h2 className="display-4">For those about to rock...</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam
                            sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                            voluptatum molestiae adipisci, beatae obcaecati.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
const SectionRight = () => (
    <section>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="p-5">
                        <img className="img-fluid rounded-circle"
                             src="https://mojetatra.cz/wp-content/uploads/2016/11/tatra-72-oranz.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="p-5">
                        <h2 className="display-4">We salute you!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam
                            sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                            voluptatum molestiae adipisci, beatae obcaecati.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

);
const Footer = () => (
    <footer className="py-5 bg-black">
        <div className="container">
            <p className="m-0 text-center text-white small">Copyright &copy; My shop 2018</p>
        </div>
    </footer>
);

const Home = () => (
    <div>
        <Header/>
        <SectionLeft/>
        <SectionRight/>
        <SectionLeft/>
        <Footer/>
    </div>
);

export default Home
