import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from '../Components/PageHeader';
import BackgroundTitleWithCaption from '../Components/BackgroundTitleWithCaption';
import ServiceBar from './OurServices-Component/ServiceBar';

const forService = [
    {
        background: "Services",
        title: "SERVICES",
        before: "We’re a",
        inblue: "customer",
        after: "centric",
        nextLine: "company",
        cbefore: "",
        cinBold: "EVERYDAY MOTIVATION",
        cafter: "is to serve our customers inthe best way possible.",
        cnextLine: ""
    }
]


class OurServices extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
            <PageHeader pageTitle="Our Services"/>
            {
                forService ? forService.map((data) => {
                    const {background, title, before , inblue , after, nextLine,cbefore,cinBold,cafter,cnextLine} = data;
                    return <BackgroundTitleWithCaption {...data} />;
                }) : null
            }
            <ServiceBar />
            </>
        )
    }
}

export default OurServices;