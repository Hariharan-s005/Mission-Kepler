import HomePage from "./pages/HomePage/HomePage.jsx";
import  ShoppingPage  from './pages/ShoppingPage/ShoppingPage.jsx';
import { Routes, Route } from "react-router-dom";
import OrderPage from "./pages/OrderPage/OrderPage.jsx";

function App() {
  return (

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="home" element={<HomePage />}/>
        </Route>

        <Route path="/categories">
          <Route path=":categories" element={<ShoppingPage />} />
        </Route>
        <Route path="/confirmOrder" element={<OrderPage />} />
      </Routes>
    
 
  );
}

export default App;
