import React from 'react';
import DogShowContainer from 'components/DogShowContainer';
import 'DogApp.css';

function DogApp() {
  const headerStyle: React.CSSProperties = {
    textTransform: "uppercase"
  };

  return (
    <div className="DogApp">
      <header className="DogApp-header">
        <h1 style={headerStyle}>Fetch dog version 1.0</h1>
      </header>

      <div className="DogApp-main">
        <DogShowContainer />
      </div>

      <footer className="DogApp-footer">
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default DogApp;
