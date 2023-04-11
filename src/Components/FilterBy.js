import { BasicDropdown } from "../UI/Dropdown";
import classes from "./FilterBy.module.css";

export const FilterBy = () => {
  return (
    <div className={classes.filter}>
      <span>Filter:</span>
      <BasicDropdown items={["Highest", "Lowest"]} title={"By Rating"} />
      <BasicDropdown items={["Highest", "Lowest"]} title={"Alphabetically"} />
    </div>
  );
};
