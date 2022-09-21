
import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {

  return (
    // <div>{tasks.map(task => <h3>{task.text}</h3>)}</div>
    <>
        {tasks.map((task)=>(<Task key={task.id} 
        task={task} 
        onToggle={onToggle}
        onDelete={onDelete}/>))}
    </>
  )
}
// Tasks.defaultProps={
//     tasks:'task'
// }
// Tasks:propTypes={
//     tasks:PropTypes.string
// }

export default Tasks