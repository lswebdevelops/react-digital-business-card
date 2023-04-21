import React from "react";
import '../styles/About.css'
import { FaTwitterSquare,FaFacebookSquare, FaInstagramSquare, 
    FaLinkedin, FaGithub} from "react-icons/fa";

class About extends React.Component{
    render(){
        return(
            <div className="about-container">
                <div className="in-about-container">
                <h3 className="h3-about">About</h3>
                    <p
                     className="p-h3-about">{this.props.about}</p>
                <h3 className="h3-interests">Interests</h3>
                    <p className="p-h3-interests">{this.props.interests}</p>
                         <footer>
                            <div className="div-footer">
                            <FaTwitterSquare />
                            <FaFacebookSquare />
                            <FaInstagramSquare />
                            <FaLinkedin />
                            <FaGithub />
                            </div>
                         </footer>
                </div>
            </div>
        );
    }
}

export default About;
