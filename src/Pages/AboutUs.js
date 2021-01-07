import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from '../Components/PageHeader';
import '../css/gernal.css';
import '../css/sticky.css';
import '../css/who_we_are.css';
import '../css/footer.css';
import Main from './AboutUs-Components/Main';



class AboutUs extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
                <PageHeader pageTitle="About Us"/>
                <Main />
                
            </>
        )
    }
}

export default AboutUs;