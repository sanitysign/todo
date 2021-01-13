import React from 'react'

class NewTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ``
    }
  }

  handleChange(e) {

    this.setState({
      task: e.target.value
    })
  }

  render() {
    return (
      <form className="todo__new" onSubmit={(e) => {
        e.preventDefault()

        if (this.state.task.trim().length) {
          this.props.addTask(this.state.task)
          this.setState({
            task: ``
          })
        }
      }}>
        <input className="todo__input" type="text" value={this.state.task} placeholder="New Task" onChange={(e) => this.handleChange(e)}/>
        <button type="submit" className="todo__add">Add</button>
      </form>
    )
  }
}

export default NewTask