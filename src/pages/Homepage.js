import React from "react";
import JessPic from "../assets/JessPic.jpeg";
import Navbar from "../components/Navbar";

function Homepage() {
    return (
        <div className = "">
        <Navbar />
            <div className="row">
                <div className="col-lg-1 col-sm-1">
                    {/* Empty column */}
                </div> 
                <div className="col-lg-10 col-sm-10 p-2 mb-4">
                    <div className="row p-3 container2">
                        <div className="col-lg-5 col-md-6 col-sm-12 float-left">
                            <img className="img-fluid rounded" src={JessPic} width="max" alt=" "></img>
                        </div>
                        <div className = "col-lg-7 col-md-6 col-sm-12 rounded container2">
                            <div className="header">
                                <h1 className="m-3 text-right">About the Artist</h1>
                            </div>
                            <p className= "m-3 text-left">
                                Jessilin is a 27 year old Front End Web Developer, Graphic Designer and creative based in Southern California, currently working as Art Department Manager for an online award and gift retailer, CrystalPlus.com. Her design knowledge in Illustrator and Photoshop quickly advanced her from intern to manager within her first year.
                            </p>
                            <p className= "m-3 text-left">
                                Having just completed a Full Stack Web Development certification, she looks forward in taking the next steps career-wise. In her spare time, she enjoys roller skating, playing with her dog Russell, and creating personal art that is then posted to a personal art Instagram, <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/prettylugothings/?hl=en">@PrettyLugoThings</a>; showcasing her multifaceted Graphic Design knowledge and expertise.                    </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 col-sm-1">
                    {/* Empty column */}
                </div> 
            </div>
        {/* <Footer /> */}
        </div>
    );
}

export default Homepage;