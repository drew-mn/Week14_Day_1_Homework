import React from "react"

class Film extends React.Component {
  render() {
    return(
      <div className="film">
<a href={this.props.url}>{this.props.children}</a>
      </div>
    )
  }
}

export default  Film
