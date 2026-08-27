import { BrowserRouter, Route, Routes } from "react-router"

import { Home } from "./pages/Home/index"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="ArreTech/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}