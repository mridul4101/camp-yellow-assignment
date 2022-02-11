// Replace classes with classes
import Link from "next/link";
import classes from "../styles/navbar.module.css";

function Navbar() {
    return <nav className={`${classes.navbar} navbar sticky-top navbar-expand-lg navbar-light shadow-sm`}>
        <div className="container">
            <Link className="navbar-brand" href="/">
                <div className="fw-bold">
                    <span className='text-warning'>CAMP</span> <span className="bg-warning p-1">YELLOW</span>
                </div>
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navItemsContainer" aria-controls="navItemsContainer" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navItemsContainer">

                <ul className={`${classes.navList} navbar-nav d-flex justify-content-between`}>

                    <div className={classes.searchBar}>
                        <span className={classes.searchIcon}>
                            <i aria-hidden className="fas fa-search"></i>
                        </span>
                        <input className={classes.searchInput} type="text" placeholder="Search" />
                    </div>

                    <div className={`${classes.navItems} d-flex`}>

                        <li className="nav-item">
                            <a className={`${classes.item} nav-link active justify-content-between align-items-center flex-column`} aria-current="page" href="#">
                                <span className={`${classes.icon}`}><i aria-hidden className="fas fa-home text-warning"></i></span>
                                <span className={`${classes.iconText} fw-lighter`}>My Feed</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className={`${classes.item} nav-link active justify-content-between align-items-center flex-column`} aria-current="page" href="#">
                                <span className={`${classes.icon}`}><i aria-hidden className="fas fa-award text-warning"></i></span>
                                <span className={`${classes.iconText} fw-lighter`}>Opportunities</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className={`${classes.item} nav-link active justify-content-between align-items-center flex-column`} aria-current="page" href="#">
                                <span className={`${classes.icon}`}><i aria-hidden className="fas fa-project-diagram text-warning"></i></span>
                                <span className={`${classes.iconText} fw-lighter`}>My Network</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className={` ${classes.item} nav-link active justify-content-between align-items-center flex-column`} aria-current="page" href="#">
                                <span className={`${classes.icon}`}><i aria-hidden className="fas fa-user text-warning"></i></span>
                                <span className={`${classes.iconText} fw-lighter`}>Profile</span>
                            </a>
                        </li>

                    </div>

                </ul>

            </div>
        </div>
    </nav>;
}

export default Navbar;