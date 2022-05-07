import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct/AddProduct";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home/Home";
import UpdateProduct from "./pages/Home/UpdateProduct/UpdateProduct";
import Items from "./pages/Items/Items/Items";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Services from "./pages/Services/Services";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import ManageInventory from "./pages/Shared/ManageInventory/ManageInventory";
import RequireAuth from "./pages/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='update/:productId' element={<RequireAuth><UpdateProduct></UpdateProduct></RequireAuth>}></Route>
        <Route path='/manageinventory' element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>
        <Route path='/items' element={<RequireAuth><Items></Items></RequireAuth>}></Route>
        <Route path='/products/add' element={<RequireAuth><AddProduct></AddProduct></RequireAuth>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
