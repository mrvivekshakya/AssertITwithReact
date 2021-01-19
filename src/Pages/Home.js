import React from 'react';
import Header from '../Components/Header';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
            <Header />
            Home
            </>
        )
    }
}

export default Home;