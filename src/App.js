import './App.css';
import Table from './components/Table'

function App() {
  return (
    <div className="App">
      <h1>Darbo užmokesčio (atlyginimo) <u className="decorLine">skaičiuoklė</u> </h1>
      <p>Ši, darbo užmokesčio (atlyginimo) skaičiuoklė skirta darbo užmokesčio dydžio ir mokesčių skaičiavimui nuo <u>2021 m. sausio 1 d.</u></p>
      <Table/>
    </div>
  );
}

export default App;
