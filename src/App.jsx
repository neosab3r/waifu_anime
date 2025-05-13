import './Styles/App.css'
import Random from "./Pages/Random.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Search from "./Pages/Search.jsx";

function App() {
    return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Search/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="/random/:signature" element={<Random/>} />
                <Route path="/random/" element={<Random/>} />
                <Route path="*" element={<h1>Страница не найдена</h1>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
