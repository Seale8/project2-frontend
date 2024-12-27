import { ThemeProvider } from "./Contexts/ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "./Components/AuthLayout";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import GamePage from "./Components/GamePage/GamePage";
import SignUpController from "./Components/SignUp/SignUpController";
import LoginController from "./Components/Login/LoginController";

function App() {
  console.log(import.meta.env.VITE_BACKEND);

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route element={<Navbar />}>
            <Route path="" element={<Home />} />
            <Route path="/:appId" element={<GamePage />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginController />} />
            <Route path="/signup" element={<SignUpController />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
