import { useState } from 'react'

{/* VARIABLES */}
const course = {
name: 'Half Stack Application development',
parts: [
{
  name: 'Fundamentals of React',
  exercises: 10,
},
{
  name: 'Using props to pass data',
  exercises: 7,
},
{
  name: 'State of a component',
  exercises: 14,
}
]
}
{/* COMPONENTS */}
const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <Part part={props.course.parts[0].name} ex={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} ex={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} ex={props.course.parts[2].exercises}/>
    </>
  )
}
const Total = (props) => {
  return (<>
    <p>Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>  
  </>)
}
const Part = (props) => {
  return (<>
    <p>
      {props.part} {props.ex}
    </p>
  </>)
}

{ /* PART 1.6 */ }

const ButtonFdbk = ({ handleClicks, text }) => (
  <button onClick={handleClicks}>
    {text}
  </button>
)
{ /* PART 1.10 */ }
const StatisticsLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  )
}
{ /* PART 1.8 */ }
const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  if (all === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text='good' value={props.good} />
          <StatisticsLine text='neutral' value={props.neutral} />
          <StatisticsLine text='bad' value={props.bad} />
          <StatisticsLine text='all' value={all} />
          <StatisticsLine text='average' value={(props.good - props.bad) / all} />
          <StatisticsLine text='positive' value={props.good / all * 100 + ' %'} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {  
  
  { /* PART 1.6 */ }
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  { /* PART 1.6 */ }
  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  { /* PART 1.12 */ }
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  
    { /* PART 1.12 */ }
  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }
  const handleVoteClick = () => {
    const cpVotes = [...votes];
    cpVotes[selected] += 1;
    setVotes(cpVotes);
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>

      { /* PART 1.6 */ }
      <div>
        <h1>give feedback</h1>
        <ButtonFdbk handleClicks={ handleGoodClick } text='good' />
        <ButtonFdbk handleClicks={ handleNeutralClick } text='neutral' />
        <ButtonFdbk handleClicks={ handleBadClick } text='bad' />
        <Statistics good={ good } neutral={ neutral } bad={ bad }/>
      </div>
        
        { /* PART 1.12 - 1.14 */ }
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <ButtonFdbk handleClicks={ handleVoteClick } text='vote' />
        <ButtonFdbk handleClicks={ handleNextClick } text='next anecdote' />
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
        <p>has {votes[votes.indexOf(Math.max(...votes))]} votes</p>
      </div>
    </div>
    
  )
}

export default App