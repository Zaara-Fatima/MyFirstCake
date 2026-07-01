import { useState } from "react"

import { Nav } from "./components/Home/Nav"
import { Footer } from "./components/Home/Footer"
import { Outlet } from "react-router-dom"


function App() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
