import './App.scss';
import Credits from './components/Credits';
import Instructions from './components/Instructions';
import 'animate.css';
import Button from './components/Button';
import GithubTriangleCorner from './components/GithubTriangleCorner';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <div className="App animate__fadeIn" style={{ animationDuration: '2s' }}>
        <GithubTriangleCorner />
        <ToastContainer newestOnTop={false} />
        <h1 className="animate__bounceIn" style={{ animationDuration: '4s' }}>
          Together
        </h1>
        <h3>
          what better way to connect with your team members than to remember
          their birthday
        </h3>
        <img
          src="https://media0.giphy.com/media/qMgOScwHMtvIA/giphy.gif"
          alt=""
          className="App-Img"
        />
        <Button />
      </div>
      <Instructions />
      <Credits />
    </div>
  );
}

export default App;
