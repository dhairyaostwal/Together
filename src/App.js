import './App.scss';
import Instructions from './components/Instructions';

function App() {
  return (
    <div>
      <div className="App">
        <h1>Together</h1>
        <h3>
          what better way to connect with your team members than to remember
          their birthday
        </h3>
        <img
          src="https://media0.giphy.com/media/qMgOScwHMtvIA/giphy.gif"
          className="App-Img"
        />

        <button className="App-btn">Upload</button>
        <label>
          Upload your spreadsheet
          <br />
          Formats supported (.csv, .xlsx)
        </label>
      </div>
      <Instructions />
    </div>
  );
}

export default App;
