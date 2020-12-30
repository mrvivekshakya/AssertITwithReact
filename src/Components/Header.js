import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
                <Navigation />
                <div style={{backgroundColor:"Black",height:"100px"}}></div>
            </>
        )
    }
}

export default Header;