import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../features/filter/filterSlice";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`lws-filter-btn ${
            filter.checkedValue === "All" && "active-filter"
          }`}
          onClick={() => dispatch(changeStatus("All"))}
        >
          All
        </button>
        <button className={`lws-filter-btn ${
            filter.checkedValue === "Featured" && "active-filter"
          }`} onClick={() => dispatch(changeStatus("Featured"))}>Featured</button>
      </div>
    </div>
  );
};

export default Filter;
