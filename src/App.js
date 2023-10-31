import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Navbar from './components/Navbar';
import Dashboard from "./Pages/adminPanel/Dashboard";
import PostDetails from "./Pages/PostDetails";
import CreatePost from "./Pages/adminPanel/CreatePost";
import CreateCategory from "./Pages/adminPanel/CreateCategory";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post/:slug" element={<PostDetails />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/create-category" element={<CreateCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
