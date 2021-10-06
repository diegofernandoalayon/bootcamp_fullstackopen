import React from 'react'

const Title = ({course}) => <h1>{course}</h1>
const Paragraph = ({part, exer})=> <p>{part} {exer}</p>
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Paragraph part = {part1} exer={exercises1} />
      <Paragraph part = {part2} exer={exercises2} />
      <Paragraph part = {part3} exer={exercises3} />
      <Paragraph part = "Number of exercises" exer={exercises1+exercises2+exercises3} />

      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App