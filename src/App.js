import React from 'react';
import './App.css';
import Resolver from './application/Resolver';
import ErrorBoundary from './application/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <Resolver/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
