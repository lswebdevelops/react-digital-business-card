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
                     className="p-h3-about">
                        Lan Lin is a web developer with expertise in creating dynamic and responsive web applications. She is constantly expanding her knowledge and skills in different programming languages and frameworks to stay up-to-date with the latest industry trends.
                         </p>
                <h3 className="h3-interests">Interests</h3>
                    <p 
                    className="p-h3-interests">
                        When she's not coding, Lan enjoys exploring new cultures through travel, reading, and staying informed on industry news and technology advancements.
                         </p>
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
