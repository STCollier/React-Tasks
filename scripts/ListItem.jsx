import React from 'react'
import { BsStarFill, BsStar, BsTrashFill} from 'react-icons/bs';

class ListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      important: false
    }
    
    this.addImportant = this.addImportant.bind(this)
  }
  addImportant() {
    this.state.important ? this.setState({important: false}) : this.setState({important: true})
  }
  render() {
    const buttonIsImportant = <a className="star starred" onClick={this.addImportant}><BsStarFill /></a>
    const buttonNotImportant =  <a className="star unstarred"onClick={this.addImportant}><BsStar /></a>
    return (
      <div className="listItemContainer">
        <div className={this.state.important ? "listItem starred" : "listItem"}>
          <li className="itemli" >{this.props.item}</li>
          <a className="trash" onClick={this.props.deleteItem}><BsTrashFill /></a>
           {this.state.important ? buttonIsImportant : buttonNotImportant}
        </div>
      </div>
    )
  }
}

export default ListItem