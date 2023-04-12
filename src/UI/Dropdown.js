import { useEffect, useRef, useState } from "react";
import classes from "./Dropdown.module.css";
import { IoIosArrowBack } from "react-icons/io";

export const BasicDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let menuRef = useRef();

  let dropdownMenuStyle = dropdownOpen
    ? `${classes.dropdown_menu} ${classes.active}`
    : `${classes.dropdown_menu} ${classes.inactive}`;

  let menuTriggerStyle = dropdownOpen
    ? `${classes.menu_trigger} ${classes.active_icon}`
    : `${classes.menu_trigger}`;

  const toggleDropdownHandler = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={classes.dropdown_wrapper} ref={menuRef}>
      <button className={menuTriggerStyle} onClick={toggleDropdownHandler}>
        {props.title} <IoIosArrowBack className={classes.icon} />
      </button>

      <div className={dropdownMenuStyle}>
        {props.items.map((item) => (
          <DropdownItem
            text={item}
            toggleDropdownHandler={toggleDropdownHandler}
            key={item}
            onClick={props.onClick}
          />
        ))}
      </div>
    </div>
  );
};

const DropdownItem = (props) => {
  const clickHandler = () => {
    if (props.onClick) {
      props.onClick(props.text);
    }
    props.toggleDropdownHandler();
  };

  return (
    <a onClick={clickHandler} className={classes.dropdownItem}>
      {props.text}
    </a>
  );
};
