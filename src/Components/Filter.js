import { useDispatch, useSelector } from "react-redux";
import { selectFilterData, setFilter } from "../redux/filter";

const Filter = () => {
  const dispatch = useDispatch();
  const selectedFilterData = useSelector(selectFilterData);
  return (
    <div>
      <button
        style={{
          margin: 5,
          color: selectedFilterData === "all" ? "red" : "black",
        }}
        onClick={() => dispatch(setFilter("all"))}
      >
        all
      </button>
      <button
        style={{
          margin: 5,
          color: selectedFilterData === "checked" ? "red" : "black",
        }}
        onClick={() => dispatch(setFilter("checked"))}
      >
        checked
      </button>
      <button
        style={{
          margin: 5,
          color: selectedFilterData === "unchecked" ? "red" : "black",
        }}
        onClick={() => dispatch(setFilter("unchecked"))}
      >
        unchecked
      </button>
    </div>
  );
};

export default Filter;
