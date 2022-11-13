import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import ProtectRoute from "./components/protectRoute";
import Dashboard from "./pages/dashboard";
import AuthContextProvider from "./contexts/authContext";
import "./App.css";
import HomePage from "./pages/homePage";
import MonitoringContextProvider from "./contexts/monitoringContext";
import Header from "./components/header/index";

function App() {
  return (
    <AuthContextProvider>
      <MonitoringContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProtectRoute />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/homePage" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </MonitoringContextProvider>
    </AuthContextProvider>
  );
}

export default App;
