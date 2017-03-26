import React, { Component, PropTypes } from 'react';

const propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
  onClick: React.PropTypes.function,
};

const defaultProps = {

};

export default class MindInfo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.props.onClick}>
        {this.props.mind.title}
        {this.props.mind.content}
      </div>
    );
  }
}
;
