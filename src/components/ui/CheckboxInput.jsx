import React from "react";

const CheckboxInput = ({...rest}) => {
  return (
    <div className="flex items-center">
      <input
        id="lws-featured"
        type="checkbox"
        name="featured"
        className="w-4 h-4"
        {...rest}
      />
      <label htmlFor="lws-featured" className="ml-2 text-sm">
        This is a featured book
      </label>
    </div>
  );
};

export default CheckboxInput;
