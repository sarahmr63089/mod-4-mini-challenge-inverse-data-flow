import React from 'react'

class NewSpice extends React.Component {
  state = {
    title: "",
    image: "",
    notes: "",
    description: "",
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addNewSpice(this.state)
  }

  handleInput = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <div className="card">
        <h2>New Spice</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input onChange={this.handleInput} type="text" name="title" value={this.state.title} />
          <label htmlFor="image">Image URL: </label>
          <input onChange={this.handleInput} type="text" name="image" value={this.state.image} />
          <label htmlFor="notes">Tasting Notes: </label>
          <input onChange={this.handleInput} type="text" name="notes" value={this.state.notes} />
          <label htmlFor="notes">Description: </label>
          <textarea onChange={this.handleInput} type="text" name="description" value={this.state.description} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewSpice