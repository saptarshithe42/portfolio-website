import React from "react";
import { experienceList } from "./experience_list";
import ExperienceCard from "./ExperienceCard";

function Experiences() {
    return (
        <div className="container-fluid experience-section">
            <div className="container-fluid">
                <div>
                    <h1 className="experience-heading">My Experiences</h1>
                </div>
                <div className="row profiles">
                    {experienceList.map((experience, index) => {
                        return (
                            <ExperienceCard
                                experience={experience}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Experiences;
