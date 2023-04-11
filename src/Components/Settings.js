import { BasicDropdown } from "../UI/Dropdown";
import Modal from "../UI/Modal";

export const Settings = (props) => {
    return (
        <Modal hideSettingsHandler={props.hideSettingsHandler}>
            <div>
                <p>Settings</p>
                <BasicDropdown
                    items={["Default", "Admin", "Super"]}
                    title={"Change Role"}
                    onClick={props.setRole}
                />
            </div>
            {/* <button onClick={props.hideSettingsHandler}>Close</button> */}
        </Modal>
    );
};
