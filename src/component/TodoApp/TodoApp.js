import React, { Component } from "react";
import "./TodoApp.css";
export class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  storeItems = (event) => {
    event.preventDefault();
    const { input, items } = this.state;

    this.setState({
      items: [...items, input],
      input: "",
    })
  }
  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    })
  }
  editItem = (index) => {
    const newValue = prompt(
      "Enter the new value for the item:",
      this.state.items[index]
    )
    if (newValue !== null) {
      const newItems = [...this.state.items]
      newItems[index] = newValue
      this.setState({
        items: newItems,
      })
    }
  }

  render() {
    const { input, items } = this.state
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>TodoApp</h1>
          <input
            type="text"
            required
            value={input}
            onChange={this.handleChange}
            placeholder="Enter Items....."
          />
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <div>
                <i
                  className="fa-regular fa-pen-to-square fa-fade"
                  onClick={() => this.editItem(index)}
                ></i>
                <i
                  className="fas fa-trash-alt fa-fade"
                  onClick={() => this.deleteItem(index)}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoApp;
