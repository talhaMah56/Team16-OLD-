import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { MainNavigation } from "./MainNavigation";

export const MainHeader = (props) => {
    return (
        <header className={classes.header}>
            <NavLink to="/" className={classes.logo}>
                PROJECTX
            </NavLink>
            <MainNavigation
                showSettingsHandler={props.showSettingsHandler}
                role={props.role}
            />
        </header>
    );
};
