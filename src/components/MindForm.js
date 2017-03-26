import React from 'react';

const propTypes = {
  onCreate: React.PropTypes.function,
};

export default class MindForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    const mind = {
      title: this.state.title,
      content: this.state.content,
    };
    this.props.onCreate(mind);
    this.setState = {
      name: '',
      phone: '',
    };
  }

  handleChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    return(
      <div>
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
      <button onClick = {this.handleClick}>
          Complete
        </button>
      </div>
    );
  }
}
