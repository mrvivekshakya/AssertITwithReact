import React from 'react';
import Header from '../Components/Header';

console.log("The Page you are routing is not found... at this time");
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