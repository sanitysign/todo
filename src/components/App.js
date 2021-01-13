import React from 'react'
import NewTask from './NewTask'
import Entry from './Entry'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: [
        {task: `Add new task 1`, done: false},
        {task: `Add new task 2`, done: false},
        {task: `Add new task 3`, done: false},
      ],
    }
  }

  componentWillMount() {
    this.checkLocalStorage()
  }

  componentDidUpdate() {
    this.updateLocalStorage()
  }

  checkLocalStorage() {
    if (localStorage.getItem(`todo`) && JSON.parse(localStorage.getItem(`todo`)).length !== 0) {
      this.setState({
        todo: JSON.parse(localStorage.getItem(`todo`))
      })
    }
  }

  updateLocalStorage() {
    localStorage.setItem(`todo`, JSON.stringify(this.state.todo))
    // console.table(JSON.parse(localStorage.getItem(`todo`)))
  }

  setDone(task) {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.task === task) {
          const itemCopy = {...item}
          itemCopy.done = !itemCopy.done
          return itemCopy
        } else {
          return item
        }
      })
    })
  }

  delete(task) {
    this.setState({
      todo: this.state.todo.filter(item => item.task !== task)
    })
  }

  addTask(value) {
    this.setState({
      todo: this.state.todo.concat({task: value, done: false})
    })
  }

  render() {
    const todo = this.state.todo.map((item, index) => {
      return (
        <Entry
          key={item.task + item.done}
          task={item.task}
          done={item.done}
          setDone={this.setDone.bind(this, item.task)}
          delete={this.delete.bind(this, item.task)}
        />
      )
    })
    return (
      <div className="todo" >
        <NewTask addTask={this.addTask.bind(this)}/>
        <ul className="todo__list">
          {todo}
        </ul>
      </div>
    )
  }
}

export default App