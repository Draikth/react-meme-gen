import { useState } from 'react';

export default function BottomText() {
  const [bottomInput, setBottomInput] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        Bottom Text:
        <input
          value={bottomInput}
          onChange={(event) => setBottomInput(event.currentTarget.value)}
        />
      </label>
    </form>
  );
}
