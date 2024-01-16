import { useState } from 'react'

const Button = (props) => {
    return (
      <button onClick={() => props.func(props.value + 1)}>{props.text}</button>
    )
}

const StatisticLine = (props) => {
  return (
    <div>
    {props.text} {props.value} <br />
    </div>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const avg = ((props.good * 1) + (props.neutral * 0) + (props.bad * -1)) / all;
  const pos = props.good / all * 100 + "%";
  if (all === 0) {
    return (
    <div>
    <h1>statistics</h1>
    <p>no feedback given</p>
    </div> )
  }

  return (
    <div>
    <h1>statistics</h1>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    <StatisticLine text="all" value={all} />
    <StatisticLine text="average" value={avg} />
    <StatisticLine text="positive" value={pos} />
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    return (
      <div>
      <h1>give feedback</h1>
      <Button value={good} func={setGood} text="good" />
      <Button value={neutral} func={setNeutral} text="neutral" />
      <Button value={bad} func={setBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )

  }
export default App
