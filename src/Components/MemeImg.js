import { useEffect, useState } from 'react';

export default function Meme() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((resp) => resp.json().then((data) => setTemplates(data.map.blank)))
      .catch((err) => console.log(err));
  }, []);
  console.log(fetch);
}