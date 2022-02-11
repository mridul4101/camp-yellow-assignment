import classes from "../styles/post.module.css";

function Post(props) {

    const expand = () => {
        $(`.less${props.post.postId}`).addClass(`${classes.hidden}`)
        $(`.more${props.post.postId}`).removeClass(`${classes.hidden}`)
    }

    const contract = () => {
        $(`.more${props.post.postId}`).addClass(`${classes.hidden}`)
        $(`.less${props.post.postId}`).removeClass(`${classes.hidden}`)
    }

    return (
        <div className={`${classes.post} shadow-sm`}>

            <div className="d-flex align-items-center justify-content-start mb-2">
                <img src="/images/user.png" alt="profile pic" className={classes.profileImg} />
                <div className='d-flex flex-column'>
                    <span className='fw-bold'>{props.post.userName}</span>
                    <span className='fw-lighter'>{props.post.userIntro}</span>
                    <span className='fw-lighter'>{props.post.postCreated}</span>
                </div>
            </div>

            <div>
                <div className={`less${props.post.postId}`}>
                    {props.post.postCaption.length > 160 ? props.post.postCaption.slice(0, 160) + '...' : props.post.postCaption}
                    {props.post.postCaption.length > 160 ? <span className={classes.seeBtn} onClick={expand}>See more</span> : ""}
                </div>
                <div className={`more${props.post.postId} ${classes.hidden}`}>
                    {props.post.postCaption}
                    <span className={classes.seeBtn} onClick={contract}>See less</span>
                </div>
                {props.post.postImg ? <img src={props.post.postImg} alt="" className={classes.postImg}></img> : ""}
            </div>

            <div className="mt-2">
                <div className="d-flex justify-content-between">
                    <div className="px-1">
                        <i className="fa-solid fa-thumbs-up" style={{ fontSize: "18px", color: "purple" }} />
                        <span className="mx-2">{props.post.postLikes} people like this</span>
                    </div>
                    <div className="d-flex justify-content-between px-1">
                        <span className="mx-3">{props.post.postComments} comments</span>
                        <span>{props.post.postShares} shares</span>
                    </div>
                </div>
            </div>

            <hr style={{ width: "100%" }} />

            <div className="d-flex justify-content-around mt-3">
                <span className={`d-flex align-items-center ${classes.postLinks}`}>
                    <i className={`fa-solid fa-thumbs-up px-2 ${classes.postBtn}`}></i> Like
                </span>
                <span className={`d-flex align-items-center ${classes.postLinks}`}>
                    <i className={`fa-solid fa-comment-dots px-2 ${classes.postBtn}`}></i> Comment
                </span>
                <span className={`d-flex align-items-center ${classes.postLinks}`}>
                    <i className={`fa-solid fa-share px-2 ${classes.postBtn}`}></i> Share
                </span>
                <span className={`d-flex align-items-center ${classes.postLinks}`}>
                    <i className={`fa-solid fa-paper-plane px-2 ${classes.postBtn}`}></i> Send
                </span>
            </div>

            <div className='d-flex justify-content-start align-items-center mt-3'>
                <img className={`${classes.commentImg}`} src='/images/DP.png'></img>
                <div style={{ width: "100%" }}>
                    <div className={`${classes.commentContainer} d-flex justify-content-start align-items-center my-2`}>
                        <input type="text" placeholder='Write a comment...' className={classes.commentInput}/>
                        <span className="px-2">
                            <i aria-hidden className="far fa-smile mx-2"></i>
                        </span>
                        <span>
                            <i aria-hidden className="far fa-image"></i>
                        </span>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Post;