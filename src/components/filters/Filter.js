import React from "react";

export const Filter = ({value,onChange}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
          <form className="form-inline my-2 my-lg-0 d-flex p-2">
            <input
              className="form-control mr-sm-2"
              type="search"
              value={value}
              placeholder="Search"
              aria-label="Search"
              onChange={onChange}
            />
          </form>
      </nav>
    </>
  );
};
