// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationCard extends Component {
  state = {searchInput: ''}

  OnEnterVal = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props
    const searchResult = destinationList.filter(eachSearch =>
      eachSearch.name.toLowerCase().includes(eachSearch.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="search-card">
          <h1 className="name">Destination Search</h1>
          <input
            placeholder="Search"
            type="search"
            value={searchInput}
            onChange={this.OnEnterVal}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
          <ul className="ul-list">
            {searchResult.map(eachItem => (
              <DestinationItem destinationItems={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationCard
