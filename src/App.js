import logo from "./logo.svg";
import "./App.css";
import Banner from "./Banner";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionThree";
function App() {
  return (
    <div className="">
      <Banner />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default App;
