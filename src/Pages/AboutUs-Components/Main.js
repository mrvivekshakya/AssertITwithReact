import React  from 'react';
import Upper from './Upper';
const uppperContent = [
    {
        heading: "Who We Are?",
        text: "Looking for Digital Marketing, Development or IT Consultancy services to take your business to the next level? Don’t worry! We’ve got you covered. With our highly experienced team of industry professionals, we focus on building your brand to reach the right audience, with the right platform"
    }
]

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
                <div className="container who-middle">
                    <div className="item" id="item1">
                        <uppper heading={uppperContent.heading} text={uppperContent.heading} />

                    </div>
                </div>
            
            </>
        );
    }
}

export default Main;