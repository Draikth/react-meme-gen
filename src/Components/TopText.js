import { useState } from 'react';

export default function TopText() {
  const [topInput, setTopInput] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        Top Text:
        <input
          value={topInput}
          onChange={(event) => setTopInput(event.currentTarget.value)}
        />
      </label>
    </form>
  );
}
