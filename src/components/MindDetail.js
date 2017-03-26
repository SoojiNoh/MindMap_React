import React from 'react';


const defaultProps = {
  isSelected: false,
  isEdit: false,
  mind: {
    title: '',
    content: '',
  },
  onDelete: () => { console.log('onDelete not defined'); },
};

const propTypes = {
  isSelected: React.PropTypes.bool,
  isEdit: React.PropTypes.bool,
  mind: React.PropTypes.object,
  onDelete: React.PropTypes.func,
};

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
        <button onClick={this.props.onDelete}>{this.props.isEdit ? 'edit' : 'delete' }</button>
      </div>
    );
  }
}

MindDetail.defaultProps = defaultProps;
MindDetail.propTypes = propTypes;
