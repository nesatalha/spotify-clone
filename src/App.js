import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import MusicControls from "./components/MusicControls";

import "./App.scss";

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <SideBar />
        <Feed />
      </div>
      <MusicControls />
    </div>
  );
}

export default App;
