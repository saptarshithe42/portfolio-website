import React from "react";

function Introduction() {

    return (

        <div className="container-fluid intro">
            <div class="row">
                <div class="col-12 col-xl-6 about">
                    <h1 className="name-heading">Hi! I am Saptarshi Mondal</h1>
                    <p className="about">
                        I am a Computer Science And Engineering Student from Jadavpur University, West Bengal, India. I am interested in exploring and working with new technologies.
                        Currently I am working on my Web Development skills with the MERN stack. I am also looking forward to mobile application development, field of machine learning and AI and many others. Currently I am in the Second year of my four year BE course.
                        <br/>
                        <br />
                        <a href={"mailto:saptarshi.the.42@gmail.com"} class="btn btn-outline-primary btn-lg" style={{ color: "white" }} target="_blank">Email : saptarshi.the.42@gmail.com </a>
                    </p>
                </div>
                <div class="col-12 col-xl-6 profile-pic-div">

                    <img className="profile-img" src="https://media-exp1.licdn.com/dms/image/C4E03AQEDMz0RM6mj_Q/profile-displayphoto-shrink_400_400/0/1649532249298?e=1674086400&v=beta&t=n47xc3ygU6VMOhuvpecWKG1wZPEG19UcEHKwZFHpYHU" alt="" />

                </div>
            </div>
        </div>

    )

}

export default Introduction;