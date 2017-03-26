import React, { Component, PropTypes } from 'react';

const propTypes = {
  title: React.PropTypes.string,

};

const defaultProps = {

};

class MindInfo extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        {this.props.mind.title}
        {this.props.mind.content}
      </div>
    );
  }
}

MindInfo.propTypes = propTypes;
MindInfo.defaultProps = defaultProps;

export default MindInfo;
