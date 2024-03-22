import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Header = ({ text }) => <h2>{text}</h2>;

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) {
    return <div>No feedback given</div>;
  }

  const average = ((good - bad) / (good + neutral + bad)).toFixed(1);
  const positive = ((good / (good + neutral + bad)) * 100).toFixed(1);

  return (
    <>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={`${positive} %`} />
        </tbody>
      </table>
    </>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [selectedAnecdote, setSelectedAnecdote] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const handleSelectedAnecdote = () => Math.floor(Math.random() * 3);

  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
