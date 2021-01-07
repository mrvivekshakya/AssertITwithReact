import React from 'react';
import Home from '../Pages/Home';
import { Route, Link,NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
class PageHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {pageTitle:null};
    }
    static getDerivedStateFromProps(props, state) {
        return {pageTitle: props.pageTitle};
    }
    render(){
        return(
            <>
                 <div className="ourVision-header">
                    <div className="black">
                        <div className="container">
                            <div className="our-title middle-white-heading"> {this.state.pageTitle}</div>
                            <Router>
                            <div className="home white-text"><NavLink to="/" exact activeStyle={{color:'white'}}>Home </NavLink> / {this.state.pageTitle}</div>
                            <Route exact path="/" component={Home} />
                            </Router>
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PageHeader;