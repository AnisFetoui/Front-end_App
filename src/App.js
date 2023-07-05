import Navbar from "./components/navbar";
import "./App.css"
import Home from "./pages/Home";
import Post from "./pages/Post";
import Anis from "./pages/Anis";
import Loginn from "./pages/Loginn";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
const App = () => {
  const user = true  ;
  return (
    <BrowserRouter>
    <div >
      <Navbar user ={user} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route 
        path="/login" 
        element={user ? <Navigate to ="/"/> : <Loginn/>}
        />
        <Route path="/post/:id" element={user ?  <Post/> : <Navigate to ="/login"/> }/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
