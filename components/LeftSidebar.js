import { useState } from "react";
import classes from "../styles/leftsidebar.module.css";

function LeftSidebar() {

    const [userDetails, setUserDetails] = useState({
        name: "Mridul Dey",
        description: "Camp Yellow || Aspiring software developer || Junior at BITM (CSE)",
        followers: 1446,
        profileViews: 560,
        postViews: 700
    });

    return (
        <div className={classes.leftsidebar}>

            <div className={`${classes.sectionTop} ${classes.leftElement} d-flex flex-column align-items-center justify-content-center shadow-sm`}>
                <img src='/images/DP.png' alt="profile picture" className={classes.profileImg} />
                <h4>{userDetails.name}</h4>
                <span className='text-center fw-lighter'>{userDetails.description}</span>

                <ul className="list-group">
                    <li className={`${classes.profileStatsItem} list-group-item d-flex justify-content-between align-items-center`}>
                        Number of followers
                        <span className="text-primary fw-bold">{userDetails.followers}</span>
                    </li>
                    <li className={`${classes.profileStatsItem} list-group-item d-flex justify-content-between align-items-center`}>
                        Profile views this month
                        <span className="text-primary fw-bold">{userDetails.profileViews}</span>
                    </li>
                    <li className={`${classes.profileStatsItem} list-group-item d-flex justify-content-between align-items-center`}>
                        Posts views this month
                        <span className="text-primary fw-bold">{userDetails.postViews}</span>
                    </li>
                </ul>
            </div>

            <div className={`${classes.leftElement} d-flex flex-column align-items-center justify-content-center shadow-sm`}>
                <h5 className="mb-3">Your groups and clubs</h5>
                <div className="events">
                    <div className="event d-flex align-items-center ">
                        <img src='/images/clubs.jpg' className={classes.eventImg}></img>
                        <h6 className='fw-normal'>Dummy Event 1</h6>
                    </div>
                    <div className="event d-flex align-items-center ">
                        <img src='/images/clubs.jpg' className={classes.eventImg}></img>
                        <h6 className='fw-normal'>Dummy Event 2</h6>
                    </div>
                    <div className="event d-flex align-items-center ">
                        <img src='/images/clubs.jpg' className={classes.eventImg}></img>
                        <h6 className='fw-normal'>Dummy Event 3</h6>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button className='btn btn-outline-primary mt-2' style={{ borderRadius: '22px' }}>Discover more events and groups</button>
                </div>
            </div>

        </div>
    );
}

export default LeftSidebar;