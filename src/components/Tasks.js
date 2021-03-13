
import { useState } from 'react'
import Task from './Task'

// const tasks = [
//   {
//     id: 1,
//     text: 'Learn MERN Stack',
//     day: '13th March @ 10pm',
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: 'Complete DSA Assignments',
//     day: '15th March @ 9am',
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: 'Design ER diagrams fro DBS project',
//     day: '17th March at 6pm',
//     reminder: false,
//   }
// ]

const Tasks = ({tasks}) => {
  
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  )
}

export default Tasks