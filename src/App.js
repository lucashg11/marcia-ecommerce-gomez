import './App.css';
import './containers/Container.css';
import { NavBar } from './components/NavBar.jsx';
import { ItemListContainer } from './containers/ItemListContainer.jsx';
import { ItemDetailContainer } from './containers/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <div className="mainContainer">
        <ItemListContainer />
        <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
