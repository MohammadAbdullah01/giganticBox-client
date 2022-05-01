import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
