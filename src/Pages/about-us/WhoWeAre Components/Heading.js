import React from 'react';
import '../../../css/gernal.css';
import '../../../css/our_vision.css';

class Heading extends React.Component{
    constructor(props){
        super(props);
        this.state = {heading:null, para1: null, para2: null};
    }
    static getDerivedStateFromProps(props,state){
        return {heading:props.heading, para1: props.para1, para2: props.para2};
    }
    render(){
        const {befor,after,inBlue,nextLine,text} = this.props;
        return(
            <>
                
                <div className="heading first-heading">{this.state.heading}</div>
                <hr className="myhrleft" />
                <p className="text">{this.state.para1}</p>
                <p className="text">{this.state.para2}</p>
            </>
        );
    }
}
export default Heading;