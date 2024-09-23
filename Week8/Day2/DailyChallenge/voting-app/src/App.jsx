import { useState } from 'react'
import './App.css'

function App() {
    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
    ])

    const castVotes = (index) => {
        const newLanguages = [...languages];
        newLanguages[index].votes += 1;
        setLanguages(newLanguages);
    };

  return (
      <div className="app">
          <h1>Vote Your Language</h1>
          {languages.map((language, index) => (
              <div key={language.name} className="language">
                  <span className="vote">{language.votes}</span>
                  <span className="title">{language.name} </span>
                  <button className="button" onClick={() => castVotes(index)}>Click here</button>
              </div>
          ))}
      </div>
  )
}

export default App
