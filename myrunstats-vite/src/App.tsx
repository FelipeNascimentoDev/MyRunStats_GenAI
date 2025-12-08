import { Route, Routes } from "react-router-dom"
import TopMenu from "./TopMenu"
import Home from "./Home"
import NotFoundPage from "./NotFoundPage"

function App() {

  return (
    <>
    <TopMenu/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFoundPage />} /> 
      <Route/>
    </Routes>
    </>
  )
}

export default App
