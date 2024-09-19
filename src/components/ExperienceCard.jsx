import React from "react";

// styles
import "./ExperienceCard.css";

function ExperienceCard({ experience }) {
    return (
        <div className="experience-card">
            <img src={experience.companyLogo} className="card-img" />
            <div className="experience-card-body">
                <div>Company Name: {experience.companyName}</div>
                <div>Position: {experience.position}</div>
                <div>Start Date: {experience.startDate}</div>
                <div>End Date: {experience.endDate}</div>
            </div>
        </div>
    );
}

export default ExperienceCard;
