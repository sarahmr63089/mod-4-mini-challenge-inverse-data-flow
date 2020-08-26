import React from 'react'

class Filter extends React.Component {

  render() {
    return (
      <div className="card">
        <h2>Filter Spices</h2>
        <div className="filters">
          <div>
            <label>Search: </label>
            <input
              type="text"
              placeholder="Search By Tasting Notes..."
              value={this.props.search}
              onChange={e => this.props.getSearchTerm(e.target.value)}
            />
          </div>
          <label>
            4 Star Only <input
              type="checkbox"
              value={this.props.fourStarOnly}
              onChange={e => this.props.toggleFilter(e.target.checked)}
            />
          </label>
        </div>
      </div>
    )
  }
}

export default Filter