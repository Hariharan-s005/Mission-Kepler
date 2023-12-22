import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShoppingPage from './pages/ShoppingPage/ShoppingPage';
import OrderPage from './pages/OrderPage/OrderPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import {navigationConstants} from './constants/navigationConstants';

function App() {
  return (
    <Routes>
      <Route path={navigationConstants.backSlash} element={<HomePage />}/>
      <Route path={`${navigationConstants.backSlash}${navigationConstants.categories}${navigationConstants.backSlash}${navigationConstants.colon}${navigationConstants.categories}`} element={<ShoppingPage />} />
      <Route path={navigationConstants.confirmOrder} element={<OrderPage />} />
      <Route path={navigationConstants.asterix} element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
