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

export default Course