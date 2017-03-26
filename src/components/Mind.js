import React, { Component, PropTypes } from 'react';
import MindInfo from './MindInfo';

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
  }

  render() {
    const mapToComponents = (data) => {
      return data.map((mind, i) => {
        return (<MindInfo mind={mind} key={i} />);
      });
    };


    return (
      <div>
        <div>{mapToComponents(this.state.mindData)}</div>
      </div>
    );
  }
}

Mind.propTypes = propTypes;
Mind.defaultProps = defaultProps;

export default Mind;
