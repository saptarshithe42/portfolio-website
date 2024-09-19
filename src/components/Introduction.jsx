import React from "react";
import profile_img from "../images/profile_picture.jpeg";

function Introduction() {
    return (
        <div className="container-fluid intro">
            <div className="row">
                <div className="col-12 col-xl-6 about">
                    <h1 className="name-heading">Hi! I am Saptarshi Mondal</h1>
                    <p className="about">
                        I am a Computer Science And Engineering Student from
                        Jadavpur University, West Bengal, India. I am interested
                        in exploring and working with new technologies. I have
                        mostly worked with Web Development Technologies. I am
                        also looking forward to mobile application development,
                        DevOps and many others. Currently I am in the Final year
                        of my four year B.E. course.
                        <br />
                        <br />
                        <a
                            href={"mailto:saptarshi.the.42@gmail.com"}
                            className="btn btn-outline-primary btn-lg"
                            style={{ color: "white" }}
                            target="_blank"
                        >
                            Email : saptarshi.the.42@gmail.com{" "}
                        </a>
                    </p>
                </div>
                <div className="col-12 col-xl-6 profile-pic-div">
                    <img className="profile-img" src={profile_img} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Introduction;
