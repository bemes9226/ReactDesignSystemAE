import { useEffect, useRef, useState, ReactNode } from "react";
import * as React from 'react';
type option = {
  label: string;
  value: string;
};
interface IDropdownProps {
  data: option[] ;
  onchange: Function;
  value: string ;
}

const Dropdown: React.FunctionComponent<IDropdownProps> = ({
  data,
  value,
  onchange,
}: IDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    let handler = (e: Event) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [[open]]);
  const [selectedValue, setSelectedValue] = React.useState("India");
  const handleChange = (value: string) => {
    setSelectedValue(value);
    onchange(value);
  };
  console.log('zzz',data)
  return (
    <>
      <button
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="aegov-btn"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {value ? value : "select Value"}
        <svg
          className="w-4 h-4 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none" />
          <polyline
            points="208 96 128 176 48 96"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </svg>
      </button>

      {open ? (
        <div
          id="dropdown"
          ref={ref}
          className={`aegov-dropdown  w-52 block absolute`}
        >
          <div className="dropdown-body text-aeblack-600">
            <ul className="py-1" aria-labelledby="dropdownButton-1" role="menu">
              <li
                onClick={() => {
                  console.log("Li clicked");
                }}
              >
                <a href="#" className="dropdown-item">
                  select
                </a>
              </li>

              {data.map((item, key) => (
                <li onClick={() => handleChange(item.label)} key={key}>
                  <a className="dropdown-item">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Dropdown;
