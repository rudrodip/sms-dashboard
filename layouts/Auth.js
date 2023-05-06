import React from "react";

export default function Admin({ children }) {
  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            {children}
          </div>
      </div>
    </>
  );
}
