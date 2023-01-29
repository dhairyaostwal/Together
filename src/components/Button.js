import '../App.scss';

const Button = () => {
  return (
    <div className="App-Btn-Container">
      <div>
        <input type={'file'} />
      </div>
      <div>
        <input type={'submit'} value="Upload" className="App-btn" />
      </div>
    </div>
  );
};

export default Button;
