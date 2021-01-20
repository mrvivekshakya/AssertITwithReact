import React from 'react';

class BackgroundTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const  {background, title, before , inblue , after, nextLine} = this.props;
        return(
            <>
                <div className="container" style={{ paddingTop: "150px"}}>
                    <div style={{position: "relative",top: "94px",textAlign: "center"}}>
                        <div id="background">{background}</div>
                    </div>
                    <div className="processing">
                        <div className="processing-title" >{title}</div>
                        <div className="heading">{before} <span className="stylish-heading"> {inblue}</span> {after} <br/> {nextLine}</div>
                        <hr className="hrProcessing" />
                    </div>
                </div>
            </>
        );
    }
}

export default BackgroundTitle;