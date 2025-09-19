import React, { useState } from 'react';

function App() {
  const [showName, setShowName] = useState(false);

  const handleClick = () => {
    setShowName(true);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>clickme</button>
      {showName && (
        <div>
          <h1>ილია კვიციანი</h1>
        </div>
      )}
    </div>
  );
}

export default App;
