import "./App.css";
import Map from "./Map";
import MapHeader from "./MapHeader";
import MapNavigation from "./MapNavigation";
import MapBody from "./MapBody";
import MapFooter from "./MapFooter";

function App() {
  const nodeList = [];
  nodeList.push(<MapHeader />);
  nodeList.push(<MapNavigation />);
  nodeList.push(<MapBody />);
  nodeList.push(<MapFooter />);

  return (
    <div className="app">
      <Map mapList={nodeList} />
    </div>
  );
}

export default App;
