import React from 'react';

class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {listText:null};
    }
    static getDerivedStateFromProps(props,state){
        return {listText:props.listText};
    }
    render(){
        return(
            <>
                <div className="text textDiv" id="textDiv1">
                    <div className="forIcon"><i className="fas fa-check"></i></div>
                    <div className="text forText">{this.state.listText}</div>
                </div>
            </>
        );
    }
}

export default ListItem;