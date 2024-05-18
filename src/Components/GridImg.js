import { useEffect, useState } from 'react';

export default function MemeGrid() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((resp) => resp.json())
      .then((data) => {
        setTemplates(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Meme Background Images</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {templates.map((template) => (
          <div
            key={`template-${String(template.id)}`}
            style={{ margin: '10px' }}
          >
            {/* for eslint needed to first make template a string literal with `template-` and then add string after the $. used chatgpt for help to figure this error out */}
            <img
              src={template.blank}
              alt={template.name}
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
            <p>
              {template.name}({template.id})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
sample API index entry:
{"id":"aag","name":"Ancient Aliens Guy","lines":2,"overlays":0,"styles":[],"blank":"https://api.memegen.link/images/aag.png","example":{"text":["","aliens"],"url":"https://api.memegen.link/images/aag/_/aliens.png"},"source":"http://knowyourmeme.com/memes/ancient-aliens","keywords":["History Channel"],"_self":"https://api.memegen.link/templates/aag"}
*/
