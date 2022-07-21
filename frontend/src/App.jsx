// import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import PrivateRoute from "./utils/PrivateRoute";
// import { AuthProvider } from "./context/AuthContext";
// import Home from "./views/homePage";
// import Login from "./views/loginPage";
// import Register from "./views/registerPage";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import Timeline from "./components/Timeline";

import PostForm from './components/PostForm'
import Timeline from './components/Timeline'
import { FaTwitter } from 'react-icons/fa'
import './App.css'

import posts from "./dummyposts.json";

function App() {
  return (
    // <BrowserRouter>
    //   <div className="flex flex-col min-h-screen overflow-hidden">
    //     <AuthProvider>
    //       <Navbar />
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/register" element={<Register />} />
    //       </Routes>          
    //     </AuthProvider>
    //   </div>
    // </BrowserRouter>

    <div className="timeline">
      <div className="app">
        <FaTwitter className="app-logo" size="2em" />
        <PostForm />
        <div className="separator"></div>
        <Timeline posts={posts} />
      </div>
    </div>
  )
}

export default App;
