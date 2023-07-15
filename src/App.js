import Navbar from "./components/navbar";
import "./App.css"
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
const App = () => {
  const user = true;
  return (
    <BrowserRouter>
    <div >
      <Navbar user ={user} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route 
        path="/login" 
        element={user ? <Navigate to ="/"/> : <Login/>}
        />
        <Route path="/post/:id" element={user ?  <Post/> : <Navigate to ="/login"/> }/>
        <Route path="/signUp" element={<SignUp/> }/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
