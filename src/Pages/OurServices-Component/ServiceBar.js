import React from 'react';
import ServiceItem from './ServiceItem';
const services = [
    {
        link: "https://assertit.io/website-design-development/",
        icon: "fas fa-bullseye inicon",
        heading: "Website Design & Development",
        text: "In today's time the most important aspect is to have a user friendly and refined website."
    },
    {
        link: "https://assertit.io/mobile-app-design-development/",
        icon: "fas fa-bullseye inicon",
        heading: "Mobile App Design and Development",
        text: "We excel in creation a customized mobile application."
    },
    {
        link: "https://assertit.io/search-engine-optimization-seo/",
        icon: "fas fa-bullseye inicon",
        heading: "Search Engine Optimization (SEO)",
        text: "We help your website rank higher ON major search engines."
    },
    {
        link: "https://assertit.io/search-engine-optimization-seo/",
        icon: "fas fa-bullseye inicon",
        heading: "Content Creation and Protection",
        text: "We believe in creating the precise content that supports your product."
    }
]
class ServiceBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
                <div className="container">
                    <div className="sevices-bar">
                        {
                            services ? services.map((data) => {
                                const {link, icon, heading, text} = data;
                                return <ServiceItem {...data} />
                            }) : null
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default ServiceBar;