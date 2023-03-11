import React from "react";
import profile_img from "../images/profile_pic.jfif"

function Introduction() {

    return (

        <div className="container-fluid intro">
            <div className="row">
                <div className="col-12 col-xl-6 about">
                    <h1 className="name-heading">Hi! I am Saptarshi Mondal</h1>
                    <p className="about">
                        I am a Computer Science And Engineering Student from Jadavpur University, West Bengal, India. I am interested in exploring and working with new technologies.
                        Currently I am working on my Web Development skills with the MERN stack. I am also looking forward to mobile application development, field of machine learning and AI and many others. Currently I am in the Second year of my four year BE course.
                        <br/>
                        <br />
                        <a href={"mailto:saptarshi.the.42@gmail.com"} className="btn btn-outline-primary btn-lg" style={{ color: "white" }} target="_blank">Email : saptarshi.the.42@gmail.com </a>
                    </p>
                </div>
                <div class="col-12 col-xl-6 profile-pic-div">
                    <img className="profile-img" src={profile_img} alt="" />
                </div>
            </div>
        </div>

    )

}

export default Introduction;