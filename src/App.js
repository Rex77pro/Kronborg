import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <main>
        <div style={{ 
          backgroundImage: 'url(/bgPic.jpg)', /* Referer til billedet direkte */ 
          height: '800px', /* Sæt en højde for at se baggrundsbilledet */ 
          backgroundSize: 'cover', /* Dæk hele området */ 
          textAlign: 'center',
          textAnchor: 'end',
          color: 'white' }}
        >
          <h1>Rasmus Kronborg Ahlstrand</h1>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
