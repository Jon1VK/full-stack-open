import { useState } from "react";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positivePercentage = (good / all) * 100;

  return all === 0 ? (
    <div>
      <p>No feedback given.</p>
    </div>
  ) : (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={`${positivePercentage} %`} />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const raiseByOne = (value) => value + 1;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={() => setGood(raiseByOne)} />
      <Button text="neutral" handleClick={() => setNeutral(raiseByOne)} />
      <Button text="bad" handleClick={() => setBad(raiseByOne)} />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
