import React from 'react';
import Heading from './Heading';
import '../../../css/gernal.css';
import '../../../css/our_vision.css';
import AurVisionImage from '../../../img/banglo.jpg';


const data = [
    {
        before: "Our",
        inBlue: "Vision",
        after:"@Assert IT",
        nextLine:"Solutions",
        text:"Assert IT Solutions runs on a tech-specific vision to achieve a heightened level of satisfaction, transparency, and improved standards with every project we accomplish. In this cutting-throat digital scenario, we are blessed with the best of both the worlds-team and technology for sure success."
    },
    {
        before: "Our",
        inBlue: "Professionalism",
        after:"Speaks",
        nextLine:"For Us",
        text:"Technology has a lot to reveal; we aim at learning it all to grow with time and changing technology to push the boundaries of technological excellence. Being a customer-centered company, we create custom-made approaches rather than following cookie-cutter methods. We are a team of integrative and innovative thinkers, designs, developers who are proficient enough to deliver quick and desirable results."
    },
    {
        before: "",
        inBlue: "Contact",
        after:"Us",
        nextLine:"",
        text:"We know what your business means to you, and we keep it growth-centered and motivated to meet challenges that the futuristic competition has to bring for you and us. With our direct line of communication, we make it achievable for us to communicate, ideate, and proceed to grow together. Get in touch with our professionals who are at your beck and call to comprehend your ideas to bring them to live for real-time application. If you have any questions or queries, let’s discuss it over a cup of coffee."
    }
];
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <>
                <div className="container middle">
                    <div className="item" id="item1">   
                        {
                            data ? data.map((d) => {
                                const {before, inBlue, after, nextLine, text} = d;
                                return <Heading {...d} />
                            }) : null
                        }
                    </div>
                    <div className="item" id="item2">
                        <img src={AurVisionImage} alt="Aur Vision Image" />
                    </div>

                </div>
            </>
        );
    }
}
export default Main;