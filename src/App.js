import logo from "./logo.svg";
import "./App.css";
import Banner from "./Banner";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionThree";
import { FaFacebookMessenger } from "react-icons/fa";
function App() {
  return (
    <div className="">
      <Banner />
      <SectionOne />
      {/* <SectionTwo /> */}
      {/* <div class="phone-call">
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
          width="50"
          alt="Call Now"
          title="Call Now"
        />
      </div>
      <div class="phone-call2">
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
          width="50"
          alt="Call Now"
          title="Call Now"
        />
      </div> */}
    </div>
  );
}

export default App;
