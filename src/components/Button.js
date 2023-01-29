import { useState } from 'react';
import '../App.scss';
import Papa from 'papaparse';

// Allowed extensions for input file
const allowedExtensions = ['csv'];

export let nameData = [];
export let dobData = [];

const Button = () => {

  const [error, setError] = useState('');

  // It will store the file uploaded by the user
  const [file, setFile] = useState('');

  const handleFileChange = (e) => {
    setError('');

    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split('/')[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError('Please upload a csv file');
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
    }
  };

  const handleParse = () => {
    if (!file) return setError('Enter a valid file. Try again.');

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;

      for (var i = 0; i < parsedData.length; i++) {
        let name = parsedData[i].FullName;
        let dob = parsedData[i].DOB;
        nameData.push(name);
        dobData.push(dob);
      }
    };
    reader.readAsText(file);
    setError('');
  };

  return (
    <div className="App-Btn-Container">
      <div>
        <input type={'file'} onChange={handleFileChange} />
      </div>
      <div>
        <input
          type={'submit'}
          value="Upload"
          className="App-btn"
          onClick={handleParse}
        />
      </div>
      <br />
      <div style={{ fontWeight: 600 }}>
        {error && error}
      </div>
    </div>
  );
};

export default Button;
