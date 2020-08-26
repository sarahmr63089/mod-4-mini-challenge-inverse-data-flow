import React from 'react'
import SpiceItem from './SpiceItem'
import Filter from './Filter'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }

  getSearchTerm = (searchTerm) => {
    this.setState({
      search: searchTerm
    })
  }

  toggleFilter = (toggleStatus) => {
    this.setState({
      fourStarOnly: toggleStatus
    })
  }

  renderSpices() {
    return this.props.spices
      .filter(spice => this.state.fourStarOnly ? spice.rating >= 4 : true)
      .filter(spice => spice.notes.toLowerCase().includes(this.state.search.toLowerCase()))
      .map((spice, index) => (
        <SpiceItem key={index} spice={spice} />
      ))
  }

  render() {
    return (
      <section className="spice-list">
        <Filter 
          search={this.state.search} 
          getSearchTerm={this.getSearchTerm} 
          fourStarOnly={this.state.fourStarOnly}
          toggleFilter={this.toggleFilter}
        />
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList