import classes from "../styles/createpost.module.css";

function CreatePost() {

    return (
        <div className={`${classes.createpost} shadow-sm`}>

            <div className="d-flex align-items-center">
                <img src="/images/DP.png" alt="profile picture" className={classes.profileImg} />
                <input type="text" className={classes.postInput} placeholder='Create a post...' />
            </div>

            <hr style={{ width: '100%' }} />

            <div className="d-flex justify-content-between">

                <div className={`${classes.postAttachments} d-flex align-items-center`}>
                    <span className={classes.attachmentIcon}>
                        <i aria-hidden className="fas fa-images"></i>
                    </span>
                    <span>
                        Photos
                    </span>
                </div>
                <div className={`${classes.postAttachments} d-flex align-items-center`}>
                    <span className={classes.attachmentIcon}>
                        <i aria-hidden className="fas fa-video"></i>
                    </span>
                    <span>
                        Videos
                    </span>
                </div>
                <div className={`${classes.postAttachments} d-flex align-items-center`}>
                    <span className={classes.attachmentIcon}>
                        <i aria-hidden className="fas fa-calendar"></i>
                    </span>
                    <span>
                        Events
                    </span>
                </div>

            </div>
        </div>
    );

}

export default CreatePost;