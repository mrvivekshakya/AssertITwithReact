import React from 'react';
import '../../../css/gernal.css';
import '../../../css/our_vision.css';

class Heading extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        const {befor,after,inBlue,nextLine,text} = this.props;
        return(
            <>
                
                <div className="heading first-heading">{befor} <span className="blue-heading">{inBlue}</span> {after} <br/> {nextLine}</div>
                <hr className="myhrleft" />
                <div className="text">{text}</div>

        
            </>
        );
    }
}
export default Heading;