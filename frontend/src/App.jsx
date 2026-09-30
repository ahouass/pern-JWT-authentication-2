import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Home() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  return (
    <div style={{ padding: 40 }}>
      <h1>Home</h1>
      {user ? (
        <>
          <p>Logged in as {user.email}</p>
          <button onClick={() => { localStorage.clear(); location.reload(); }}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}