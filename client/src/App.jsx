import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reg from './Reg';
import Log from './Log';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Reg />} ></Route>
        <Route path="/Log" element={<Log/>} ></Route>
        <Route path="/home" element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
