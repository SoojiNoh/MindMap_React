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
    // this.handleClick=this.handleClick.bind(this);
  }
  render() {
    return (
      <div onClick={this.props.onClick} ref="mindButton">
        <ul>
          <li>
            <div className="button">
              {this.props.mind.title}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
