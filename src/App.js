import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/gernal.css';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
              {/* <Header /> */}
              <Home />
            </>
        );
    }   
}

export default App;