import './App.css';
import { mainStyle, profilePicture } from './bgPicStyle';  // Importér stilen

function App() {
  return (
    <div className="App">
      <header class="bg-dark p-3">
        <div class="container-fluid">hello</div>
      </header>
      <main style={mainStyle}>
        <div class="row container pt-5">
          <div class="col">
            <h7>Hi,</h7> 
            <br></br>
            <h7>I am, Rasmus</h7>
            <br></br>
            <h7>Software Developer</h7>
          </div>
          <div class="col" style={profilePicture}>
          </div>
        </div>
      </main> 
      <footer class="bg-dark p-3">
        {/* <h1>Footer</h1> */}
      </footer>
    </div>
  );
}

export default App;
