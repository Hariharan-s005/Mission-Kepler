import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShoppingPage from './pages/ShoppingPage/ShoppingPage';
import OrderPage from './pages/OrderPage/OrderPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="home" element={<HomePage />} />
      </Route>
      <Route path="/categories">
        <Route path=":categories" element={<ShoppingPage />} />
      </Route>
      <Route path="/confirmOrder" element={<OrderPage />} />
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
