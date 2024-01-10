import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad;
  const avg = ((good * 1) + (neutral * 0) + (bad * -1)) / all;
  const pos = good / all * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button><button onClick={() => setNeutral(neutral + 1)}>neutral</button><button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      good {good}<br />neutral {neutral}<br />bad {bad}<br/>all {all}<br />average {avg}<br />positive {pos}%
    </div>
  )
}

export default App