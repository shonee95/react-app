import { Spinner } from "phosphor-react";
import React from "react";
import "./spinner.css";

export const SpinnerLayout = () => {
  return (
    <div className="spinnerBody">
      <Spinner size={64} className='spinnerItem' />
    </div>
  );
};
