import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from '../../Components/PageHeader';
import Main from './AurVision Components/Main';
import '../../css/gernal.css';
import '../../css/our_vision.css';



class AurVision extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
                <PageHeader pageTitle="Aur Vision"/>
                <Main />
                
            
            </>
        )
    }
}

export default AurVision;