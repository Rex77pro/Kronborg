import './App.css';
import { mainStyle } from './bgPicStyle';  // Importér stilen

function App() {
  return (
    <div className="App">
      <header>
        {/* <h1>Header</h1> */}
      </header>
      <main style={mainStyle}>
        <div class="container">
          <h1>Rasmus Kronborg Ahlstrand</h1>
        </div>
      </main> 
      <footer>
        {/* <h1>Footer</h1> */}
      </footer>
    </div>
  );
}

export default App;
