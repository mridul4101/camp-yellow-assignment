import classes from "../styles/rightsidebar.module.css";

function RightSidebar() {

    const news = [
        { id: 101, title: "Lorem ipsum dolor sit amet.", posted: "2d ago", readers: 20000 },
        { id: 102, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", posted: "2d ago", readers: 45000 },
        { id: 103, title: "Lorem ipsum dolor sit amet consectetu.", posted: "4d ago", readers: 5000 },
        { id: 104, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsum.", posted: "6d ago", readers: 21000 },
    ];

    return (
        <div className={classes.rightsidebar}>

            <div className={`${classes.sectionTop} ${classes.rightElement} shadow-sm`}>
                <h5 className="fw-bold">Peer in News</h5>

                {
                    news.map(item => {
                        return <div key={item.id} className="d-flex flex-column my-3">
                            <span className="fw-normal">{item.title}</span>
                            <div className="d-flex">
                                <span className="fw-lighter">{item.posted}</span>
                                <span className="fw-lighter px-5">{item.readers} readers</span>
                            </div>
                        </div>
                    })
                }

                <div className="d-flex justify-content-center">
                    <button type='button' className='btn btn-outline-primary my-2' style={{borderRadius: '22px'}}>Click for more news</button>
                </div>
            </div>

            <div className={`${classes.rightElement} shadow-sm`}>
                <h5 className='fw-bold mb-4'>Top opportunities for you</h5>

                <div className="events">
                    <div className="event d-flex align-items-center ">
                        <img src='/images/clubs.jpg' className={classes.eventImg}></img>
                        <h6 className='fw-normal text-primary'>Dummy Event 1</h6>
                    </div>
                    <div className="event d-flex align-items-center ">
                        <img src='/images/clubs.jpg' className={classes.eventImg}></img>
                        <h6 className='fw-normal text-primary'>Dummy Event 2</h6>
                    </div>
                    <div className="event d-flex align-items-center ">
                        <img src='/images/clubs.jpg' className={classes.eventImg}></img>
                        <h6 className='fw-normal text-primary'>Dummy Event 3</h6>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button type='button' className='btn btn-outline-primary my-2' style={{borderRadius: '32px'}}>Click for more opportunities</button>

                </div>

            </div>
        </div>
    );
}

export default RightSidebar;