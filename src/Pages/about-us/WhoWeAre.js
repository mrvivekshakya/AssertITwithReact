import React from 'react';
import ReactDOM from 'react-dom';
import Main from './WhoWeAre Components/Main';
import PageHeader from '../../Components/PageHeader';
import '../../css/gernal.css';
import '../../css/our_vision.css';

class WhoWeAre extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
                <PageHeader pageTitle="Who We Are"/>
                <Main />
            </>
        )
    }
}

export default WhoWeAre;