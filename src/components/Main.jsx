import React from "react";
import '../styles/Main.css'
import image_photo from '../images/lanlin.jpg'
import { GrMail } from "react-icons/gr";
class Main extends React.Component{
    render(){
        return(
            <div className="main-container">
                <div className="in-main-container">
                <img
                className="img-container-main"
                src={image_photo}
                alt="phone of a woman"/>
                <h1 className="h1-container-main">Lan Lin</h1>
                <h2 className="h2-container-main">Frontend Developer</h2>
                <h3 className="h3-container-main">@lanlin.webdev</h3>
                <button className="btn-container-main">
                <GrMail className="icon-mail-main" />
                <a className="a-mail-main" href="https://mail.google.com/mail/" target="__blank">Email</a></button>
                </div>
            </div>
        );
    }
}

export default Main;
