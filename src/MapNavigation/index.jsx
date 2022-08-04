import React from "react";
import "./styles.scss";
import { navItems } from "./NAV-DOCS";
import globe from "../assets/globe.png";

const MapNavigation = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-left-section">
          {navItems.map((navItem, itemIdx) => (
            <span key={itemIdx}>{navItem}</span>
          ))}
        </div>

        <div className="nav-right-section">
          <span>
            <img src={globe} alt="globe-icon"></img>
          </span>
          <span>English (US)</span>
        </div>
      </div>
    </>
  );
};

export default MapNavigation;
