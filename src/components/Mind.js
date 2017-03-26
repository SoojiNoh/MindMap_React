import update from 'react-addons-update';
import React, { Component } from 'react';
import MindInfo from './MindInfo';
import MindDetail from './MindDetail';
import MindCreate from './MindForm';

const propTypes = {

};

const defaultProps = {

};

class Mind extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      mindData: [{
        id: 1,
        title: 'Dogs',
        content: 'lovely',
        parentId: 0,
      }, {
        id: 2,
        title: 'Poodle',
        content: 'fuzzy',
        parentId: 1,
      }, {
        id: 3,
        title: 'Cats',
        content: 'Milky',
        parentId: 0,
      }, {
        id: 4,
        title: 'RussianBlue',
        content: 'Glam',
        parentId: 3,
      },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }


  handleClick(key) {
    this.setState({
      selectedKey: key,
    });
  }

  handleCreate(mind) {
    this.setState({
      ...this.state,
      mindData: [...this.state.mindData, mind],
    });
    // immunityhelper version
    // this.setState({
    //     mindData: update(this.state.mindData, { $push: [mind] }),
    // });
  }

  handleDelete() {
    if (this.state.selectedKey < 0) return;
    this.setState({
      mindData: update(this.state.mindData,
        { $splice: [[this.state.selectedKey, 1]] },
      ),
      selectedKey: -1,
    });
  }

  render() {
    const mapToComponents = (data) => {
      return data.map((mind, i) => {
        return (<MindInfo mind={mind} key={i} onClick={() => this.handleClick(i)} />);
      });
    };

    console.log(this.state.mindData);
    console.log(this.state.selectedKey);


    return (
      <div>
        <div>{mapToComponents(this.state.mindData)}</div>
        <div>
          <MindDetail
            isSelected={this.state.selectedKey !== -1}
            mind={this.state.mindData[this.state.selectedKey]}
            onDelete={this.handleDelete}
          />
        </div>
        <div><MindCreate onCreate={this.handleCreate} /></div>
      </div>
    );
  }
}

Mind.propTypes = propTypes;
Mind.defaultProps = defaultProps;

export default Mind;
