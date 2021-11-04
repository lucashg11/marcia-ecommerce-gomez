import { useState } from 'react';

import './App.css';
import './containers/Container.css';
import { NavBar } from './components/NavBar.jsx';
import { ItemListContainer } from './containers/ItemListContainer.jsx';
import { ItemDetailContainer } from './containers/ItemDetailContainer';

function App() {
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState(null);
  
  const changeFlag = ()=>{
    setFlag(!flag);
  }

  const setNewId= (i)=>{
    setId(i)
  }

  return (
    <div>
      <NavBar/>
      <div className="mainContainer">
        <>{
          flag ?
          <ItemListContainer changeFlag={changeFlag} setNewId={setNewId}/>
          :
          <ItemDetailContainer id={id}/>
        }
        </>
      </div>
    </div>
  );
}

export default App;
