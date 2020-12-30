import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import '../css/gernal.css';
import '../css/sticky.css';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import WhoWeAre from '../Pages/about-us/WhoWeAre';
import AurVision from '../Pages/about-us/AurVision';
import aurServices from '../Pages/OurServices'
import WDDServices from '../Pages/services/WDD-Sevices';
import MADDServices from '../Pages/services/MADD-Sevices';
import EMServices from '../Pages/services/EM-Services';
import SMOServices from '../Pages/services/SMO-Services';
import SEOServices from '../Pages/services/SEO-Sevices';
import PPCServices from '../Pages/services/PPC-Services';
import AurPortfolio from '../Pages/OurPortfolio';
import Blogs from '../Pages/Blogs';
import ContactUs from '../Pages/ContactUs';




import { Route, Link,NavLink, BrowserRouter as Router } from 'react-router-dom';
import OurPortfolio from '../Pages/OurPortfolio';

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
        <>
        <Router>  
        <nav className="navbar">
            <div className="content" style={ {width: "100%;"}}>
              <div className="logo">
                <NavLink to="/" exact activeStyle={{color:'magenta'}}><img src="../img/logo2.png" alt="" style={{width: "200px;"}}/></NavLink>  
              </div>
              <ul className="menu-list">
                <div className="icon1 cancel-btn">
                  <i className="fas fa-times"></i>
                </div>
                <li> <NavLink to="/" exact activeStyle={{color:'magenta'}}>HOME</NavLink></li>
                <li className="about-us"><NavLink to="/aboutus" exact activeStyle={{color:'magenta'}}>ABOUT US </NavLink><i className="fas fa-angle-down down1"></i>
                  <ul className="about-dropdown">
                    <li><NavLink to="/aur-vision" exact activeStyle={{color:'magenta'}}><hr/>OUR VISION</NavLink></li>
                    <li><NavLink to="/who-we-are" exact activeStyle={{color:'magenta'}}><hr/>WHO WE ARE</NavLink></li>
                  </ul>
                </li>
                <li className="our-services"><NavLink to="/aur-services" exact activeStyle={{color:'magenta'}}>AUR SERVICES</NavLink><i className="fas fa-angle-down down2"></i>
                  <ul className="services-dropdown">
                    <li><NavLink to="/website-design-and-development" exact activeStyle={{color:'magenta'}}><hr/> WEBSITE DESIGN AND DEVELOPMENT</NavLink></li>
                    <li><NavLink to="/mobile-app-design-and-development" exact activeStyle={{color:'magenta'}}><hr/>MOBILE APP DESIGN AND DEVELOPMENT</NavLink></li>
                    <li><NavLink to="/email-marketing" exact activeStyle={{color:'magenta'}}><hr/>EMAIL MARKETING</NavLink></li>
                    <li><NavLink to="/social-media-marketing" exact activeStyle={{color:'magenta'}}><hr/>SOCIAL MEDIA MARKETING (SMO)</NavLink></li>
                    <li><NavLink to="/search-engine-optimization" exact activeStyle={{color:'magenta'}}><hr/>SEARCH ENGINE OPTIMIZATION (SEO)</NavLink></li>
                    <li><NavLink to="/pay-per-click-advertisement" exact activeStyle={{color:'magenta'}}><hr/>PAY-PER-CLICK ADVERTISEMENT (PPC)</NavLink></li>
                  </ul>
                </li> 
                <li><NavLink to="/our-portfolio" exact activeStyle={{color:'magenta'}}>AUR PORTFOLIO</NavLink></li>
                <li><NavLink to="/blogs" exact activeStyle={{color:'magenta'}}>BLOGS</NavLink></li>
                <li><NavLink to="/contact-us" exact activeStyle={{color:'magenta'}}>CONTACT US</NavLink></li>
                <li><a href="tel:9667835545"><i className="fas fa-phone-alt"> </i>+91-9667835545</a></li>
              </ul>
              <div className="icon1 menu-btn">
                <i className="fas fa-bars"></i>
              </div>
            </div>



            <Route exact path="/" component={Home} />  
            <Route path="/aboutus" component={AboutUs} />  
            <Route path="/aur-vision" component={AurVision} />
            <Route path="/who-we-are" component={WhoWeAre} />
            <Route path="/aur-services" component={aurServices} /> 
            <Route path="/website-design-and-development" component={WDDServices} />
            <Route path="/mobile-app-design-and-development" component={MADDServices} />
            <Route path="/email-marketing" component={EMServices} />
            <Route path="/social-media-marketing" component={SMOServices} />
            <Route path="/search-engine-optimization" component={SEOServices} />
            <Route path="/pay-per-click-advertisement" component={PPCServices} />
            <Route path="/our-portfolio" component={OurPortfolio} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/contact-us" component={ContactUs} />

              

        </nav>
        </Router>  
        </>
        );
    }
}

export default Navigation;