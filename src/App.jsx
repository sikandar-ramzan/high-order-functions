import "./App.scss";
import Map from "./Map";
import MapHeader from "./MapHeader";
import MapNavigation from "./MapNavigation";
import MapBody from "./MapBody";
import MapFooter from "./MapFooter";
import { useState } from "react";

function App() {
  // const nodeList = [];

  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app">
      <div className="landing-page">
        <div className="header">
          <MapHeader setCurrentPage={setCurrentPage} />
          {currentPage === "home" && (
            <LandingPage setCurrentPage={setCurrentPage} />
          )}
          {currentPage === "map" && <MapPage />}
        </div>
      </div>
    </div>
  );
}

const MapPage = () => {
  const nodeList = [];
  // nodeList.push(<MapHeader />);
  nodeList.push(<MapNavigation />);
  nodeList.push(<MapBody />);
  nodeList.push(<MapFooter />);
  return <Map mapList={nodeList} />;
};

const LandingPage = ({ setCurrentPage }) => {
  return (
    <div className="main-body">
      <br />
      <h1>Welcome to Sikandar Developer Notes</h1>
      <br />
      <h2>SDN DOCS: </h2>
      <hr />
      <ul>
        <br />
        <li>
          <h3>High Order Functions:</h3>
        </li>
        <ul>
          <li className="items">
            <div
              onClick={() => setCurrentPage("map")}
              className={"hof-list-item"}
            >
              Array.prototype.map()
            </div>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default App;
