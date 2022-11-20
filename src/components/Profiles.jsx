import React from "react";
import profile_links from "./profile_lists";


function Profiles() {

    return (

        <div className="container-fluid profile-section">

            <div className="container-fluid" >
                <div>
                    <h1 className="profile-heading">My Profiles</h1>
                </div>
                <div className="row profiles">
                    {
                        profile_links.map((profileItem) => {
                            return (
                                <div className="col-12 col-md-4 profile-icon-div">
                                    <a href={profileItem.url} class="btn btn-outline-primary btn-lg" style={{ color: "white" }} target="_blank"> {profileItem.icon} {profileItem.name} </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );

}

export default Profiles;