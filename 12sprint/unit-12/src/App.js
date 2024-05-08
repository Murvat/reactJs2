import GoodsList from './containers/GoodsList';
import CartList from './containers/CartList';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      {/* Вывод данных из хранилища */}
      <GoodsList />
      <CartList />
    </div>
  );
}

export default App;
