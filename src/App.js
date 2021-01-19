import Header from './Components/Header';
import React from 'react';
import './css/index.css';
import './css/gernal.css';
import './css/sticky.css';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import WhoWeAre from './Pages/about-us/WhoWeAre';
import AurVision from './Pages/about-us/AurVision';
import aurServices from './Pages/OurServices';
import WDDServices from './Pages/services/WDD-Sevices';
import MADDServices from './Pages/services/MADD-Sevices';
import EMServices from './Pages/services/EM-Services';
import SMOServices from './Pages/services/SMO-Services';
import SEOServices from './Pages/services/SEO-Sevices';
import PPCServices from './Pages/services/PPC-Services';
import AurPortfolio from './Pages/OurPortfolio';
import Blogs from './Pages/Blogs';
//import OurPortfolio from './Pages/OurPortfolio';
import ContactUs from './Pages/ContactUs';
import NotFound from './Components/notfound';
import logo2 from './img/logo2.png';

import { Route, Link, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom';
//import Navigation from './Components/Navigation';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {username:"Vivek Shakya"};
    }
    render(){
        return(
            <>
            <BrowserRouter>
            <nav className="navbar" style={{backgroundColor:"black"}}>
                <div className="content" style={ {width: "100%;"}}>
                  <div className="logo">
                    <Link to="/" exact={true} ><img src={logo2} style={{width: "200px"}}/></Link>  
                  </div>
                  <ul className="menu-list">
                    <div className="icon1 cancel-btn">
                      <i className="fas fa-times"></i>
                    </div>
                    <li> <Link to="/" exact={true} >HOME</Link></li>
                    <li className="about-us"><Link to="/aboutus" exact={true} >ABOUT US </Link><i className="fas fa-angle-down down1"></i>
                      <ul className="about-dropdown">
                        <li><Link to="/aur-vision" exact={true} ><hr/>OUR VISION</Link></li>
                        <li><Link to="/who-we-are" exact={true} ><hr/>WHO WE ARE</Link></li>
                      </ul>
                    </li>
                    <li className="our-services"><Link to="/aur-services" exact={true} >AUR SERVICES</Link><i className="fas fa-angle-down down2"></i>
                      <ul className="services-dropdown">
                        <li><Link to="/website-design-and-development" exact={true} ><hr/> WEBSITE DESIGN AND DEVELOPMENT</Link></li>
                        <li><Link to="/mobile-app-design-and-development" exact={true} ><hr/>MOBILE APP DESIGN AND DEVELOPMENT</Link></li>
                        <li><Link to="/email-marketing" exact={true} ><hr/>EMAIL MARKETING</Link></li>
                        <li><Link to="/social-media-marketing" exact={true} ><hr/>SOCIAL MEDIA MARKETING (SMO)</Link></li>
                        <li><Link to="/search-engine-optimization" exact={true} ><hr/>SEARCH ENGINE OPTIMIZATION (SEO)</Link></li>
                        <li><Link to="/pay-per-click-advertisement" exact={true} ><hr/>PAY-PER-CLICK ADVERTISEMENT (PPC)</Link></li>
                      </ul>
                    </li> 
                    <li><Link to="/our-portfolio" exact={true} >AUR PORTFOLIO</Link></li>
                    <li><Link to="/blogs" exact={true} >BLOGS</Link></li>
                    <li><Link to="/contact-us" exact={true} >CONTACT US</Link></li>
                    <li><a href="tel:9667835545"><i className="fas fa-phone-alt"> </i>+91-9667835545</a></li>
                  </ul>
                  <div className="icon1 menu-btn">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </nav>
              
              <Switch>
                <Route exact={true} path="/" component={Home} />
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
                <Route path="/our-portfolio" component={AurPortfolio} />
                <Route path="/blogs" component={Blogs} />
                <Route path="/contact-us" component={ContactUs} />
                <Route component={NotFound} />
              </Switch>
            
              </BrowserRouter>
            </>
            );
    }
}

export default App;