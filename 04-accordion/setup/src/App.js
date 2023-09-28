import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question, setQuestion] = useState(data);

  return (
    <main>
      <div className="container">
      <section className="info"></section>
        {question.map((quest)=> {
        return  <SingleQuestion key={quest.id} {...quest}/>
        })}
      </div>
    </main>
  );
}

export default App;
