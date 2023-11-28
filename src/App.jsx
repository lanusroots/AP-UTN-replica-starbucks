import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./routes/Home"
import Menu from "./routes/Menu"
import Cafe from "./routes/Cafe"
import HandleNotFound from "./routes/HandleNotFound"
import Experiencia from "./routes/Experiencia"
import Localizar from "./routes/Localizar"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/menu"} element={<Menu />} />
        <Route path={"/cafe"} element={<Cafe />} />
        <Route path={"/experiencia"} element={<Experiencia />} />
        <Route path={"/localizar"} element={<Localizar />} />
        <Route path={"*"} element={<HandleNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
