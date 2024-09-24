import './App.css';

function App() {
  return (
    <div className="App">
      <head>
      </head>
      <main>
        <div style={{ 
          backgroundImage: 'url(/IMG_2895-2.jpg)', /* Referer til billedet direkte */ 
          height: '1000px', /* Sæt en højde for at se baggrundsbilledet */ 
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
