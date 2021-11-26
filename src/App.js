import './App.scss';
import './containers/Container.scss';
import { NavBar } from './components/NavBar.jsx';
import { ItemListContainer } from './containers/ItemListContainer.jsx';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CartContainer } from './containers/CartContainer';

function App() {
  return (
    
    <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <div className="mainContainer">
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <CartContainer/>
          </Route>
        </Switch>
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
