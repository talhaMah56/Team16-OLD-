import classes from "./MainNavigation.module.css";
import { FaUserFriends, FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoSearchCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const MainNavigation = (props) => {
    return (
        <nav>
            <ul className={classes.main_nav_list}>
                {props.role === "Admin" && (
                    <li>
                        <NavLink
                            to="/addMedia"
                            className={classes.main_nav_link}
                        >
                            <IoSearchCircleSharp /> Add Media
                        </NavLink>
                    </li>
                )}
                <li>
                    <NavLink to="/friends" className={classes.main_nav_link}>
                        <FaUserFriends /> Friends
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/mylists" className={classes.main_nav_link}>
                        <FaStar /> My Lists
                    </NavLink>
                </li>
                <li>
                    <a
                        href="#"
                        className={`${classes.main_nav_link} ${classes.nav_cta}`}
                        onClick={props.showSettingsHandler}
                    >
                        <IoMdSettings /> {props.role}
                    </a>
                </li>
            </ul>
        </nav>
    );
};
