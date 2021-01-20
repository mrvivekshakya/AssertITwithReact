import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom';
import '../../css/gernal.css';
import '../../css/who_we_are.css';
import '../../css/our_services.css';
import '../../css/sticky.css';



class ServiceItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const {link, icon, heading, text} = this.props;
        return(
            <>
                {/* <a to={link}>
                    <div className="content">
                        <div className="icon"><i class={icon}></i></div>
                        <div className="small-heading">{heading}</div>
                        <div className="text small-content">{text}</div>
                    </div>
                </a> */}
                 <a href="https://assertit.io/search-engine-optimization-seo/">
                        <div className="content">
                            <div className="icon"><i class="fas fa-bullseye inicon"></i></div>
                            <div className="small-heading">Content Creation and Protection</div>
                            <div className="small-content">We believe in creating the precise content that supports your product.</div>
                        </div>
                </a>
            </>
        );
    }
}

export default ServiceItem;