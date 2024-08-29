import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Registration from "./component/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Showall from "./component/Showall";
import View from "./component/View";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Registration />} />
            <Route exact path="/showall" element={<Showall />} />
            <Route exact path="/view" element={<View />} />
          </Routes>
        </BrowserRouter>

        <Footer> </Footer>
      </div>
    </>
  );
}

export default App;
