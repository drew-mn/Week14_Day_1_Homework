import React from 'react';

class ViewMore extends React.Component {
  render() {
    return(
      <p><a href={this.props.url}>View more upcoming releases</a></p>
    )
  }

}

export default ViewMore;
