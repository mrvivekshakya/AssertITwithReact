import React from 'react';
import AboutUs from '../../img/about-us.jpg';

class LeftImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
             <div class="item" id="item2">
                <img src={AboutUs} alt="About Us Page" />
            </div>
            </>
        );
    }
}

export default LeftImage;