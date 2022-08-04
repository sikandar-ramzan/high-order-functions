import React from "react";
import "./styles.scss";
import { sdn } from "./FOOTER-DOCS";

const MapFooter = () => {
  return (
    <div className="footer-container">
      <div className="footer-items">{sdn}</div>
      <div className="footer-items">&copy; Sikandar Ramzan</div>
    </div>
  );
};

export default MapFooter;
