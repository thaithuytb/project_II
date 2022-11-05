import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import TodoList from "./pages/todo";
import ProtectRoute from "./components/todo/protectRoute";
import "./App.css";

function App() {
  let user = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectRoute user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
