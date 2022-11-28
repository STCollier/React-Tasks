import React from 'react'
import ListItem from './ListItem'
import '../styles/List.scss'

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      list: []
    }

    this.addEntry = this.addEntry.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteitem = this.deleteItem.bind(this)
    
  }
  addEntry(e) {    
    if (this.state.input.length < 30) {
      this.state.list.push(this.state.input)
      this.setState({
        list: this.state.list
      })
      
    } else {
      alert("Please make sure you input less than 30 characters!")
    }
    
    this.state.input = ''
    e.preventDefault()
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  deleteItem(index) {
    this.setState({
      list: this.state.list.filter((_, i) => i !== index)
    })
  }
  render() {
    const items = this.state.list.map((item, index) => <ListItem deleteItem={() => this.deleteItem(index)} item={item} key={item+'-'+index}/>)
    const noTasksStyle = {
      display: 'block'
    }
    this.state.list.length <= 0 ? noTasksStyle.display = 'block' : noTasksStyle.display = 'none'
    return (
      <div className="list-container">
        <div className="list">
          <h1 className="title">React Tasks</h1>
          <form onSubmit={this.addEntry}>
            <input 
              type="text"
              className="list-input"
              value={this.state.input} 
              onChange={this.handleChange} 
              placeholder="Add An Item!"
            />
          </form>
          <div style={noTasksStyle} className="noTasksReminder">
            <h1 className="noTasks">You have no tasks yet!<br/></h1>
            <h1 className="addOne">Add one!</h1>
          </div>
          <ul style={{padding: 0, listStyleType: "none"}}>
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;