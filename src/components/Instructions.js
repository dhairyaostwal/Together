import './Instructions.scss';

const Instructions = () => {
  return (
    <div className="Instructions">
      <h1 className="Instructions-H1">Learn more</h1>
      <div>
        <ol>
          <li>Your spreadsheet should be of format as shown below</li>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <table>
              <tr>
                <th>Full Name</th>
                <th>DOB(MM/DD/YYYY)</th>
              </tr>
              <tr>
                <td>Puneet Superstar</td>
                <td>03/04/1999</td>
              </tr>
              <tr>
                <td>Awesome Rockstar</td>
                <td>02/03/2000</td>
              </tr>
              <tr>
                <td>...</td>
                <td>...</td>
              </tr>
            </table>
          </div>
          <li>Upload your spreadsheet</li>
          <li>Authenticate with Google OAuth</li>
          <li>Confirm with events added to your Google Calendar</li>
        </ol>
      </div>
    </div>
  );
};

export default Instructions;
