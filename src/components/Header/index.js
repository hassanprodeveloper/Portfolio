import React from "react";
import "./style.css";
import { Colors } from "../../config/design";

function index() {
  const headerItem = [
    { title: "Portfolio" },
    { title: "About" },
    { title: "My Work" },
    { title: "Contact me" },
  ];
  return (
    <>
      <div
        className="row p-2  px-5 header-wrapper d-flex  justify-content-center align-items-center"
        style={{ background: Colors.transparent }}
      >
        {/* 1st col */}
        <div className="col-lg-3 d-flex  justify-content-center align-items-center">
          <h4 className="px-2 transition white-text header-icon text-uppercase cursor-pointer selection-none">
            &lt;Mern Stack /&gt;
          </h4>
        </div>
        {/* 2nd col */}
        <div className="col-lg-6 d-flex flex-row justify-content-end align-items-center">
          {headerItem.map((item) => {
            return (
              <>
                <h5
                  className="px-2 mx-3   transition white-text header-link text-capitalize cursor-pointer selection-none"
                  onClick={() => console.log("title pressed")}
                >
                  {item.title}
                </h5>
              </>
            );
          })}
        </div>
        {/* 3rd col */}
        <div className="col-lg-3  d-flex  justify-content-start align-items-center">
          <h5 className="py-2 px-4 white-text transition header-download-btn ext-capitalize cursor-pointer selection-none">
            Download CV
          </h5>
        </div>
      </div>
    </>
  );
}

export default index;
