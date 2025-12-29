import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import isTokenExpired from "./TokenExpiry";

function App() {
  const token = localStorage.getItem("token");
  const isAuthenticated = token && !isTokenExpired(token);
  if (token && !isAuthenticated) {
    localStorage.removeItem("token");
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/profile" />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/profile"
        element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
