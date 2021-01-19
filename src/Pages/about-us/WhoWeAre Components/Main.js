import React from 'react';
import Heading from './Heading';
import ListItem from './ListItem';
import AurVisionImage from '../../../img/banglo.jpg';
const heading = "Who We Are?";
const para = [
    "We’re here to help you promote your brand and reach all the customers you can! With a team of hard-working and talented professionals, you can expect the highest standards of quality from us.",
    "No matter what your requirements are, we’ve got you covered. But still, for your benefit, here are a few things we focus on:"
];

const listText = [
    "Digital Marketing: Reach your target audience on any platform possible. There are no limits. We understand getting more customers is a fundamental goal of your business. With our digital marketing efforts and your guidance, we’ll hit all the goals you’ve set.",
    "Web Development: First impressions do matter - and in the world of marketing, your website is your only chance to hook your customers. We handle everything for you so you can focus on your business instead of technical challenges.",
    "Mobile App Development: Getting the attention of customers is getting harder day by day. Your website isn’t enough to do that. The way to do that is to get a permanent spot on your customer’s minds - through their smartphones. Once again, we’ve got you covered!",
    "IT Consultancy: Once you have the required technical aspects setup, we help you crush any challenges on your path to exponential growth. Our team works with you to provide unbiased advice so you achieve more than you ever thought possible!"
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
                        <Heading heading={heading} para1={para[0]} para2={para[1] } />
                        <div className=" text texts ">
                            {
                                listText ? listText.map((text) => {
                                    return <ListItem listText={text} />
                                }): null
                            }
                        </div>
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