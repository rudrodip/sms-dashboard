import React from "react";

// components

import Sidebar from "@/components/sidebar/sidebar.js";
import Footer from "@/components/footer/footer.js";

export default function Admin({ children }) {
  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <Sidebar>
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            {children}
            <Footer />
          </div>
        </Sidebar>
      </div>
    </>
  );
}
