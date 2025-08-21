import logo from "./logo.svg";
import "./App.css";
import Accoridan from "./Components/Accordian/Accoridan";
import Star from "./Components/Star/Star";
import Whether from "./Components/Whether/Whether";
import ImageSliders from "./Components/ImageSliders/ImageSliders";
import Tree from "./Components/TreeView/Tree";
import QrCode from "./Components/QRCode/QrCode";
import Otp from "./Components/Otp/Otp";
import ChipInput from "./Components/Chip Input/ChipInput";
import TabComponent from "./Components/Tab Component/TabComponent";
import Pagination from "./Components/Pagination/Pagination";
import BreadCrums from "./Components/BreadCrums/BreadCrums";
import ProductDetails from "./Components/BreadCrums/ProductDetails";
import DropDown from "./Components/DropDown/DropDown";

function App() {
  return (
    <div className="App">
      {/* <Accoridan /> */}
      {/* <Star  starCount={5} /> */}
      {/* <Whether /> */}
      {/* <ImageSliders /> */}
      {/* <Tree/> */}
      {/* <QrCode /> */}
      {/* <Otp  length={5} /> */}
      {/* <ChipInput/> */}
      {/* <TabComponent/> */}
      {/* <Pagination/> */}
      {/* <BreadCrums/> */}
      <DropDown/>
    </div>
  );
}

export default App;
