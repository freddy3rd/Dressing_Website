import React from "react";
import { FaAngleLeft } from "react-icons/fa";
export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next p-2 rounded-full bg-slate-950"
      type="button"
      {...restProps}
    >
      <FaAngleLeft className="text-xl text-slate-50  " />
      {children}
    </button>
  );
};
