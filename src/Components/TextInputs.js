import { useState } from 'react';

export default function TextInputs() {
  const [topInput, setTopInput] = useState('');
  const [bottomInput, setBottomInput] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <label>
          Top Text:
          <input
            value={topInput}
            onChange={(event) => setTopInput(event.currentTarget.value)}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Bottom Text:
          <input
            value={bottomInput}
            onChange={(event) => setBottomInput(event.currentTarget.value)}
          />
        </label>
      </div>
    </form>
  );
}
