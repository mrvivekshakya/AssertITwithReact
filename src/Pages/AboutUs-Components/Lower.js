import React from 'react';
import LowerItem from './LowerItem';

const itemText = [
    {
        text: "Digital Marketing"
    },
    {
        text: "Web Designing and Development"
    },
    {
        text: "Mobile App Development"
    },
    {
        text: "IT Consultancy"
    }
]

class Lower extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <>
                 <div className=" text texts ">
                    {/* { itemText ? itemText.map((button, index) => {
                        button.operation = this.props.operation;
                        const {outerClass, innerClass, value, id} = button;
                        return <CButton key={index} {...button}/>
                    }): null} */}
                     <LowerItem text={itemText[0].text} />
                     <LowerItem text={itemText[1].text} />
                     <LowerItem text={itemText[2].text} />
                     <LowerItem text={itemText[3].text} />

                 </div>
            </>
        );
    }
}
export default Lower;