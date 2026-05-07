import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import Home from "./pages/Home"
import NavBar from "./assets/components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/style.css";
import LandingPages from "./pages/LandingPages";
import CarouselContainer from "./assets/Components/CarouselContainer"
import CarouselImage from "./assets/Components/CarouselImage"
import DummyProducts from "./assets/Components/DummyProducts"

const App=()=>{

  return(
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPages/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="home" element ={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


;