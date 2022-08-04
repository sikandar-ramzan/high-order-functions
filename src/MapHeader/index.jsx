import React from "react";
import "./styles.scss";

const MapHeader = () => {
  return (
    <div className="header-container">
      <div className="header-left-section">
        <span className="header-logo">
          MDN WebDocs<span className="header-logo-text">__</span>
        </span>
        <span className="header-references">References</span>
        <span className="header-guides">Guide</span>
        <span className="header-mdn-plus">MDN Plus</span>
      </div>
      <div className="header-right-section">
        <span className="header-theme">Theme</span>
        <span className="header-search">Search</span>
        <span className="header-already-sub">Already a Member?</span>
        <span>
          <button className="header-getmdn-bttn">GET MDN PLUS</button>
        </span>
      </div>
    </div>
  );
};

export default MapHeader;
