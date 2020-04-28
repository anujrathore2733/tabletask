import React from 'react';
import TableDisplay from  "./component/table"
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-extended bg-dark">
        <h3 className="text-light">Data Table</h3>
      </nav>
      <div className="TableDisplay">
        <TableDisplay></TableDisplay>

      </div>

    </div>
  );
}

export default App;
