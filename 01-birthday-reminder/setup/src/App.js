import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [peeps, setPeeps] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{peeps.length} Birthdays</h3>

        <List people={peeps}/>

        <button onClick={() => setPeeps([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
