import React from 'react';

export default class MindDetail extends React.Component {
  render() {
    const details = (
      <div>
        <p>{this.props.mind.title}</p>
        <p>{this.props.mind.content}</p>
      </div>
    );
    const blank = (<div>Not Selected</div>);

    return(
      <div>
        <h2>Details</h2>
        {this.props.isSelected ? details : blank}
      </div>
    );
  }
}

MindDetail.defaultProps = {
  mind: {
    title: '',
    content: '',
  },
}
