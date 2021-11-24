import './App.scss';
import './containers/Container.scss';
import { NavBar } from './components/NavBar.jsx';
import { ItemListContainer } from './containers/ItemListContainer.jsx';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <NavBar/>
      <div className="mainContainer">
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
