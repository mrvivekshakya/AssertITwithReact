import React from 'react';

class Caption extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const {before, inBold, after, nextLine} = this.props;
        return(
            <>
                 <div className="simple4">{before}<span className="bold-text">{inBold}</span>{after} <br/>{nextLine}</div>
            </>
        );
    }
}

export default Caption;