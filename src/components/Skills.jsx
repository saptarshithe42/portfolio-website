import React from "react";
import skill_list from "./skill_lists";

function Skills() {

    return (
        <div className="container-fluid skills-container">
            <div className="container-fluid" >
                <div>
                    <h1 className="skills-heading">My Skills</h1>
                    <p className="skill-desc">These are the various technologies I have worked with</p>
                </div>
                <div className="row skills">
                    {
                        skill_list.map((skillItem) => {
                            return (

                                <div className="col-6 col-sm-3 skill-icon-div rounded-4 m-sm-2">
                                    <img className="skill-icon" src={skillItem.image} alt="" />
                                    <p className="skill-name">{skillItem.name}</p>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </div>
    )

}

export default Skills;




                                // < div class="card" style="width: 18rem;" >
                                //     <img src={skillItem.image} class="card-img-top" alt="..." />
                                //         <div class="card-body">
                                //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                //         </div>
                                // </div>