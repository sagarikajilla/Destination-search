// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  filterResults = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const modifiedList = destinationsList.filter(item =>
      item.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg">
        <h1 className="heading">Destination Search</h1>
        <div className="search-cont">
          <input
            type="search"
            value={searchInput}
            placeholder="search"
            onChange={this.filterResults}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-img"
          />
        </div>
        <ul className="list-cont">
          {modifiedList.map(each => (
            <DestinationItem details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
