import React, { Component } from 'react';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faGoogle,
    faFacebook,
    faTwitter,
    faLinkedin,
    faReact,
    faPython
  } from '@fortawesome/free-brands-svg-icons';
  




class Header extends Component {
    render() {
        return (
            
            <html>
                <head><link href="css/hover.css" rel="stylesheet" media="all"></link></head>
                
            
                
               
                
                
            
            <div class= "all">
            <body class="footer text-center ">
            
  
            <div id="fly-in">  
            <div class="text-black">John Hartnett<span></span></div>
<div class="text-black">Full Stack <span>Web Developer</span></div>
<div class="text-black">1000+ Hours<span>Experience</span></div>
<div class="text-black"><h1 class="fix"><FontAwesomeIcon icon={faReact} /> C# <FontAwesomeIcon icon={faPython} /></h1> <span>proficiency</span></div>

<div class="text-black">Available for Hire</div>
<div class="text-black">John Hartnett<span></span></div>




</div>

            
                <div class="row justify-content-center ">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase text-black text-center font-weight-bold mb-80">My Projects</h4>
                        <br/>
                        <a class="hvr-wobble-to-bottom-right font-weight-bold" href="https://github.com/JHartnettPro/Python-Dating-App">Dating App</a>
                        <br/>
                        <a class="hvr-wobble-to-bottom-right font-weight-bold" href="https://github.com/JHartnettPro/C-Hobby-Planner">Hobby Planner</a>
                        <br/>
                        <a  class="hvr-wobble-to-bottom-right font-weight-bold" href="https://github.com/JHartnettPro/React-Speech-to-Text">Speech to Text</a>
                    </div>
                    
                    <div class="col-lg-4">
                        <h4 class="text-uppercase text-black text-center font-weight-bold mb-80">About Me</h4>
                        <br/>
                        <p class="lead mb-0 text-center text-black font-weight-bold">
                                Full stack developer with a passion for creating functional and stylish web applications. 
                                Looking to join a team of devoted professional developers to create user-friendly web applications and products. 
                                 
                        </p>
                    </div>
                </div>
            
            <div class="row justify-content-center ">
                
            <div class="col-sm-4 mb-5 mb-sm-0 ">
                
            <br/>
                        <br/>
            
                        <h5 class="text-uppercase text-black text-center mb-4 font-weight-bold">Contact</h5>
                        <a class="btn mx-1 btn-lg " href="https://linkedin.com/in/john-hartnett-24b2261b7/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a class="btn  mx-1 btn-lg " href="https://github.com/JHartnettPro"><FontAwesomeIcon icon={faGithub} /></a>
                        <a class="btn mx-1 btn-lg " href="https://mail.google.com/mail/?view=cm&fs=1&to=jhartnettpro@gmail.com&su=Hi I'd like to hire you immediately&body=You can also call or text me anytime at 708 546 7062 for a quicker response."><FontAwesomeIcon icon={faEnvelope} /></a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        

                        
                    </div>
                    </div>
                    
                   </body>
                   </div>
                   
                   
        
        </html>

        )
    }
}
export default Header;