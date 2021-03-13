import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'Learn MERN Stack',
    day: '13th March @ 10pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Revise DSA',
    day: '15th March @ 9am',
    reminder: true,
  },
  {
    id: 3,
    text: 'Design ER diagrams',
    day: '17th March at 6pm',
    reminder: false,
  }
])
  return (
    <div className = 'container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
    
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello from Class</h1>
//   }
// }

export default App;
