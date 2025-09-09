import { Routes, Route } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "@/pages/Home/Home"
import Dashbooard from "@/pages/Home/Dashbooard"
import Login from "@/pages/Auth/Login"
import Signup from "@/pages/Auth/Signup"
import Research from "@/features/Research"


const AppRoutes = () => {
  return (
    <Routes>
      {/* Public page (no navbar/footer) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Routes wrapped with MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashbooard />} />
        <Route path="/research" element={<Research />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
