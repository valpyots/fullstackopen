

const Course = ({ course }) => {

return <>
<h1>Web development curriculum</h1>
{course.map(course => <div key={course.id}><h2 key={course.id*10}>{course.name}</h2><Part key={(course.id*100)} part={course.parts} /><Sum key={(course.id*1000)} course={course.parts} /></div>)}
</>
}
const Sum = ({ course }) => {
const i = 0;
const sum = course.reduce((a, c) => a + c.exercises, i)
return <b key={course.id}>Total of {sum} exercises</b>
}
const Part = ({ part }) => {
return <>{part.map(parts => <p key={parts.id}>{parts.name} {parts.exercises}</p>)}</>
}
const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  

  return <Course course={course} />

}

export default App