import React from "react";
import "./styles.scss";

const Map = ({ mapList }) => {
  return (
    <div>
      <div className="map-all">
        {mapList.map((node, nodeIdx) => (
          <div key={nodeIdx}> {node} </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
