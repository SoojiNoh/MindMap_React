import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {
  mind: {
    title: '',
    content: '',
  },
  isActivated: false,
};

class MindContent extends Component {

  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div>
        <div className="popup">
          <div>{this.props.mind.content}</div>
          <svg height="50" width="100">
            <path d="M0 50 L40 0 L65 0 Z" />
              Sorry, your browser does not support inline SVG.
            </svg>
        </div>
      </div>
    );
  }
}

MindContent.propTypes = propTypes;
MindContent.defaultProps = defaultProps;

export default MindContent;
