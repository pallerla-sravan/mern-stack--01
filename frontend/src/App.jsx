import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Success from "./components/Success";
import Total1 from "./components/Total1";

const App = () => {


    return (
        <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/success" element={<Success/>} />
      <Route path="/total" element={<Total1/>} />
      </Routes>
    </BrowserRouter>
        </div>
    );
};

export default App;
