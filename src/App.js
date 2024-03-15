import logo from "./logo.svg";
import "./App.css";
import Accoridan from "./Components/Accordian/Accoridan";
import Star from "./Components/Star/Star";
import Whether from "./Components/Whether/Whether";
import ImageSliders from "./Components/ImageSliders/ImageSliders";
import Tree from "./Components/TreeView/Tree";
import QrCode from "./Components/QRCode/QrCode";

function App() {
  return (
    <div className="App">
      {/* <Accoridan /> */}
      {/* <Star /> */}
      {/* <Whether /> */}
      {/* <ImageSliders /> */}
      {/* <Tree/> */}
      <QrCode />
    </div>
  );
}

export default App;
