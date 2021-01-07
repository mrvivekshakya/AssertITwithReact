import React from 'react';
import Header from '../Components/Header';

class NotFound extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
                The Given Request cann't be Handle
            </>
        )
    }
}

export default NotFound;