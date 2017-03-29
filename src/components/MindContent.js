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

  popupActivate() {


    const mindButton = document.getElementsByClassName("button").getBoundingClientRect();
    const popupCoordsX = mindButton.left + window.scrollX;
    const popupCoordsY = mindButton.top + window.scrollY;
    const popup = document.getElementsByClassName("popup");
    popup.style.left = `${popupCoordsX}px`;
    popup.style.top = `${popupCoordsY}px`;
    popup.style.transform = `translate(${popupCoordsX}px, ${popupCoordsY}px)`;
    console.log(popup.style.top);
    // console.log(popup[this.props.key]);
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
