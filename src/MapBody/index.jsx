import React, { useState } from "react";
import "./styles.scss";
import {
  arrayMethods,
  arrayProperties,
  mapBodyHeading,
  mapMethodDefiniton,
  articleList,
} from "./DOCUMENTATION";
import { ReactComponent as ChevronDown } from "../assets/arrow-down.svg";

const MapBody = () => {
  const [showProps, setShowProps] = useState(false);
  const [showMethods, setShowMethods] = useState(false);

  const toggleShowProps = () => setShowProps(!showProps);
  const toggleShowMethods = () => setShowMethods(!showMethods);
  return (
    <div className="map-body-container">
      <div className="map-body-left-section">
        <div className="documentation-index-container">
          <h2>Related Topics</h2>
          <div className="left-section-headings">
            <h3>Standard built-in objects</h3>
            <h4>Array</h4>
          </div>

          <div className="array-properties" onClick={toggleShowProps}>
            <span className={!showProps ? "expanded" : ""}>
              <ChevronDown />
            </span>
            <h4>Properties</h4>
          </div>
          {showProps && (
            <div>
              {arrayProperties.map((arrProps, arrPropsIdx) => (
                <li key={arrPropsIdx}>{arrProps}</li>
              ))}
            </div>
          )}
          <div className="array-methods" onClick={toggleShowMethods}>
            <span className={!showMethods ? "expanded" : ""}>
              <ChevronDown />
            </span>
            <h4>Methods</h4>
          </div>
          {showMethods && (
            <div>
              {arrayMethods.map((method, methodIdx) => (
                <li key={methodIdx}>{method}</li>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="map-body-center-section">
        <div className="map-body-center-container">
          <div className="center-heading"></div>
          <h1>{mapBodyHeading}</h1>
          <div className="map-method-definition">{mapMethodDefiniton}</div>
        </div>
      </div>
      <div className="map-body-right-section">
        <div className="map-body-righ-container">
          <div>
            <h3>In this article</h3>
          </div>
          <div className="article-list-container">
            {articleList.map((listItem, idx) => (
              <li key={idx} className={"article-list-items"}>
                {listItem}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapBody;
