import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Shows from "./Shows";
import ShowDetails from "./ShowDetails";
import Form from "./Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shows" element={<Shows />}></Route>
            <Route path="/shows/:id" element={<ShowDetails />}></Route>
            <Route path="/form" element={<Form />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
