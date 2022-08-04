import "./App.css";
import Map from "./Map";
import MapHeader from "./MapHeader";
import MapNavigation from "./MapNavigation";
import MapBody from "./MapBody";

function App() {
  const nodeList = [];
  nodeList.push(<MapHeader />);
  nodeList.push(<MapNavigation />);
  nodeList.push(<MapBody />);

  return (
    <div className="app">
      <Map mapList={nodeList} />
    </div>
  );
}

export default App;
