// import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "../context/AuthContext";
// import Home from "./views/homePage";
// import Login from "./views/loginPage";
// import Register from "./views/registerPage";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import Timeline from "./components/Timeline";

// import { useState } from 'react'
import Navbar from "./Navbar";
import PostForm from "./PostForm";
import Timeline from "./Timeline";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

// import initialPosts from "./dummyposts.json";

function App() {
  // const [posts, setPosts] = useState(initialPosts)

  // const handlePostMessage = (content) => {
  //   const newPost = {
  //     id: id,
  //     name: name,
  //     body: body,
  //     created_at: Date(Date.now()),
  //   }
  //   setPosts([...posts, newPost])
  // }

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
    <div>
      <AuthProvider>
        <Navbar />
        <div className="timeline">
          <div className="app">
            <PostForm />
            <div className="separator"></div>
            <Timeline />
          </div>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
