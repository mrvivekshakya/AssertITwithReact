import React from 'react';

class Upper extends React.Component{
    constructor(props){
        super(props);
        this.state ={heading:null,text:null};
    }
    static getDerivedStateFromProps(props, state){
        return {heading:props.heading, text:props.text}
    }
    render(){
        return(
            <>
                <div className="heading first-heading">{this.state.text}</div>
                <hr className="myhrleft" />
                <p className="text">{this.state.text}</p>
            </>
        );
    }
}

export default Upper;