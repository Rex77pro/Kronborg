import './App.css';

function App() {
  return (
    <div className="App">
      <head>
      </head>
      <main>
        <div style={{ 
          backgroundImage: 'url(/bgPic.jpg)', /* Referer til billedet direkte */ 
          height: '800px', /* Sæt en højde for at se baggrundsbilledet */ 
          backgroundSize: 'cover', /* Dæk hele området */ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white' }}
        > 
          <div>
            <h1>Rasmus Kronborg Ahlstrand</h1>
          </div> 
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
