import { useState } from 'react';

function BackgroundChanger(): JSX.Element {
  const [color, setColor] = useState<string>('white');

  // Handle color change from input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
    <div className="color-container">
      <h2>Background Color Changer</h2>
      <input type="color" value={color} onChange={handleChange} />
      <input
        type="text"
        placeholder="Enter a color"
        value={color}
        onChange={handleChange}
      />
    </div>
  </div>
  );
}

export default BackgroundChanger;
