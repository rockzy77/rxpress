import './App.css';
import './css/Home.css';
import './css/NavBar.css';
import './css/Footer.css';
import './css/Shop.css';
import './css/ProductDet.css';
import './css/Cart.css';
import './css/Checkout.css';
import './css/OrderStatus.css';
import './css/Login.css';



import { CustomRouter } from './router/Router';
import { ShopProvider } from './provider/ShopProvider';
import { AuthProvider } from './provider/AuthProvider';

function App() {
  return (
    <ShopProvider>
      <AuthProvider>
        <CustomRouter />
      </AuthProvider>
    </ShopProvider>
  );
}

export default App;
