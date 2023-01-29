import { useState } from 'react';
import '../App.scss';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleOauth from '../controllers/GoogleOauth';

// Allowed extensions for input file
const allowedExtensions = ['csv'];

export let nameData = [];
export let dobData = [];

const Button = () => {
  // It will store the file uploaded by the user
  const [file, setFile] = useState('');
  const [upload, clickedUpload] = useState(false);

  const handleFileChange = (e) => {
    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split('/')[1];
      if (!allowedExtensions.includes(fileExtension)) {
        toast('Please upload a csv file', {
          position: 'top-right',
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          type: 'error',
        });
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
    }
  };

  const handleParse = () => {
    if (!file)
      return toast('Enter a valid file. Try again.', {
        position: 'top-right',
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        type: 'error',
      });

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;

      for (const element of parsedData) {
        let name = element.FullName;
        let dob = element.DOB;
        nameData.push(name);
        dobData.push(dob);
      }
    };
    reader.readAsText(file);

    localStorage.setItem('TogetherNameData', nameData);
    localStorage.setItem('TogetherDOBData', dobData);

    toast('Success!', {
      position: 'top-right',
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      type: 'success',
    });

    clickedUpload(true);
  };

  return file && upload ? (
    <GoogleOauth />
  ) : (
    <div className="App-Btn-Label-Container">
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
      </div>
      <label>
        Upload your spreadsheet
        <br />
        Formats supported (.csv, .xlsx)
      </label>
    </div>
  );
};

export default Button;
