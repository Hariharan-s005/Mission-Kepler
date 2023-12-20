import HomePage from "./page/HomePage/HomePage";
import  ShoppingPage  from './page/ShoppingPage/ShoppingPage.jsx';
import { Routes, Route } from "react-router-dom";
import OrderPage from "./page/OrderPage/OrderPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<><HomePage /></>}>
          <Route path="home" element={<><HomePage /></>}/>
        </Route>

        <Route path="/categories">
          <Route path=":categories" element={<ShoppingPage />} />
        </Route>
        <Route path="/confirmOrder" element={<OrderPage />} />
      </Routes>
    
    </>
  );
}

export default App;
