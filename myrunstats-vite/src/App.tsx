import { Route, Routes } from "react-router-dom"
import TopMenu from "./components/TopMenu"
import Home from "./components/Home"
import NotFoundPage from "./components/NotFoundPage"
import ProgressTracker from "./components/ProgressTracker"


function App() {

  return (
    <>
    <TopMenu/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/progress-tracker" element={<ProgressTracker />} />
      <Route path="/*" element={<NotFoundPage />} /> 
    </Routes>
    </>
  )
}

export default App
