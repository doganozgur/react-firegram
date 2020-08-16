import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please choose a valid image file type(png/jpg)');
    }
  };

  return (
    <div>
      <form>
        <label>
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
