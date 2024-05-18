import { useEffect, useState } from 'react';

export default function Meme() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((resp) => resp.json())
      .then((data) => {
        setTemplates(data.map);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>Meme will be here eventually</div>;
}

/*
sample API index entry:
{"id":"aag","name":"Ancient Aliens Guy","lines":2,"overlays":0,"styles":[],"blank":"https://api.memegen.link/images/aag.png","example":{"text":["","aliens"],"url":"https://api.memegen.link/images/aag/_/aliens.png"},"source":"http://knowyourmeme.com/memes/ancient-aliens","keywords":["History Channel"],"_self":"https://api.memegen.link/templates/aag"}
*/
