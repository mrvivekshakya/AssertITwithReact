import React from 'react';
import Lower from './Lower';

class LowerItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {text:null};
    }
    static getDerivedStateFromProps(props,state){
        return {text:props.text};
    }
    render(){
        return(
            <>
                 <div className="text textDiv" id="textDiv1">
                    <div className="forIcon"><i className="fas fa-check"></i></div>
                    <div className="text forText">{this.state.text}</div>
                </div>
            </>
        );
    }
}
export default LowerItem;