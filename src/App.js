import React from 'react';
import './css/index.css';
import './css/gernal.css';
import Header from './Components/Header';
import Home from './Pages/Home';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {username:"Vivek Shakya"};
    }
    render(){
        return(
            <>
              <Header />
            </>
        );
    }
}

export default App;