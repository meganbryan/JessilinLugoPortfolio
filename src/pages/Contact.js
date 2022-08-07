import React from "react";
import Navbar from "../components/Navbar";
import EmailLogo from "../assets/email.svg";
import GithubLogo from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import Resume from "../assets/resume.svg";
import ResumePDF from "../assets/JLugo_2022.pdf";

function Contact() {
    return (
        <div className = "">
        <Navbar />
            <div className="row">
                <div className="col-lg-1 col-md-0">
                {/* Empty Column */}
                </div>
                <div className = "col-lg-10 col-md-10 col-sm-12">
                    <div className="container p-3 mb-5">
                        <div className = "row p-2">
                            <h1 className = "ml-4 pl-4">Contact Me:</h1>
                        </div>
                        <div className = "row p-2">
                            <div className = "col-3 p-3 text-center">
                                <a href="mailto:prettylugothings@gmail.com"><img className="" src={EmailLogo} width="max" alt=" "></img></a>
                            </div>
                            <div className = "col-3 p-3 text-center">
                                <a href = "https://www.linkedin.com/in/jessilin-lugo-53090668/"><img className="" src={LinkedIn} width="max" alt=" "></img></a>
                            </div>
                            <div className = "col-3 p-3 text-center">
                            <a href={ResumePDF} target="_blank" rel="noreferrer"><img className="" src={Resume} width="max" alt=" "></img></a>
                            </div>
                            <div className = "col-3 p-3 text-center">
                                <a href = "https://github.com/jessilinlugo"><img className="" src={GithubLogo} width="max" alt=" "></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 col-md-0">
                {/* Empty Column */}
                </div>
            </div>
        </div>
    );
}

export default Contact;