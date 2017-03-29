import React from 'react';


const defaultProps = {
  isSelected: false,
  isEdit: false,
  mind: {
    title: '',
    content: '',
  },
  onDelete: () => { console.log('onDelete not defined'); },
  onEdit: () => { console.log('ondEdit not defined'); },
};

const propTypes = {
  isSelected: React.PropTypes.bool,
  isEdit: React.PropTypes.bool,
  mind: React.PropTypes.object,
  onDelete: React.PropTypes.func,
  onEdit: React.PropTypes.func,
};

export default class MindDetail extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleToggle() {
    if (!this.state.isEdit) {
      this.setState({
        title: this.props.mind.title,
        content: this.props.mind.content,
      });
    } else {
      console.log(this.state.tite + this.state.content);
      this.props.onEdit(this.state.title, this.state.content);
    }
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }
  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    const details = (
      <div>
        <p>{this.props.mind.title}</p>
        <p>{this.props.mind.content}</p>
      </div>
    );
    const blank = (<div>Not Selected</div>);

    const edit = (
      <div>
        <h2>Edit</h2>
        <input
          type="text"
          name="title"
          placeholder="Title for the MIND"
          value = {this.state.title}
          onChange = {this.handleChange}

        />
        <textarea
          type="textarea"
          name="content"
          placeholder="Content for the MIND"
          value = {this.state.content}
          onChange = {this.handleChange}
        />
      <button onClick = {this.handleToggle}>Complete</button>
      </div>
    );

    const view = this.state.isEdit ? edit: details;

    return(
      <div>
        <h2>Details</h2>
        {this.props.isSelected ? view : blank}
        <button onClick={this.handleToggle}>Edit</button>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

MindDetail.defaultProps = defaultProps;
MindDetail.propTypes = propTypes;
