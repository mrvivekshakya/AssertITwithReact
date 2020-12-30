import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Components/Header'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
                <Header />
            </>
        )
    }
}

export default Home;