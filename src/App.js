import logo from "./logo.svg";
import "./App.css";

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
import CheckBoxGroup from "./Components/Parent Input Box/CheckBoxGroup";
import Accordian from "./Components/Accordian/Accordian";
import NestedAccordian from "./Components/NestedAccordian/NestedAccordian";

function App() {
  return (
    <div className="App">
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
      {/* <DropDown/> */}
      {/* <CheckBoxGroup child={5} /> */}
      {/* <div className="max-w-6xl m-auto bg-slate-100 p-1">
        <h2 className="text-center font-bold text-5xl mb-3">Single Open Model</h2>
        <Accordian allowMultiple={false} />
        <h2 className="mt-20 text-center font-bold text-5xl mb-3">Multiple Open Model</h2>
        <Accordian allowMultiple={true} />
      </div> */}
      <div className="max-w-6xl m-auto ">
        {/* <h2 className="text-center font-bold text-5xl ">Single Open Model</h2>
        <NestedAccordian allowMultiple={false} /> */}
        <h2 className="mt-20 text-center font-bold text-5xl mb-3">Nested Accordian</h2>
        <NestedAccordian allowMultiple={true} />
      </div>
      
    </div>
  );
}

export default App;
