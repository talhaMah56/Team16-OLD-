import { BasicDropdown } from "../UI/Dropdown";
import Modal from "../UI/Modal";
import { IoMdSettings } from "react-icons/io";
import classes from "./Settings.module.css";

export const Settings = (props) => {
    let roleInfo;

    if (props.role === "Default") {
        roleInfo = "Default user can do certain things";
    } else if (props.role === "Admin") {
        roleInfo = "Admin user has a lot more power, they are better";
    } else if (props.role === "Super") {
        roleInfo = "Super user is even... better";
    }

    return (
        <Modal
            hideSettingsHandler={props.hideSettingsHandler}
            className={classes.settings}
        >
            <h2 className={classes.settings_title}>
                <IoMdSettings /> Settings
            </h2>
            <section className={classes.settings_info}>
                <h3>Current Role: {props.role}</h3>
                <p>{roleInfo}</p>
            </section>
            <div className={classes.dropdown}>
                <BasicDropdown
                    items={["Default", "Admin", "Super"]}
                    title={"Change Role"}
                    onClick={props.setRole}
                />
            </div>
            <button
                className={classes.close_button}
                onClick={props.hideSettingsHandler}
            >
                Close
            </button>
        </Modal>
    );
};
