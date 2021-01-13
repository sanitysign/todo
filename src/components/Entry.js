import React from 'react'

class Entry extends React.Component {

  render() {
    return (
      <li className="todo__entry">
        <span className={this.props.done ? "todo__text done" : "todo__text"} >{this.props.task}</span>
        <button className="todo__btn todo__btn_done" onClick={this.props.setDone}>
          {
            this.props.done ?
            'Done':
            'Active'
          }
        </button>
        <button className="todo__btn todo__btn_delete" onClick={this.props.delete}>
          Delete
        </button>
      </li>
    )
  }
}

export default Entry