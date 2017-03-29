import update from 'react-addons-update';
import React, { Component } from 'react';
import MindInfo from './MindInfo';
import MindDetail from './MindDetail';
import MindCreate from './MindForm';
import MindContent from './MindContent';
import './talkingcircle.css';
import './talkingcircle';

const propTypes = {

};

const defaultProps = {

};

class Mind extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alreadyPopup: false,
      selectedKey: -1,
      mindData: [{
        id: 1,
        title: 'Dogs',
        content: 'lovely',
        parentId: 0,
        createdAt: 0,
      }, {
        id: 2,
        title: 'Poodle',
        content: 'fuzzy',
        parentId: 1,
        createdAt: 0,
      }, {
        id: 3,
        title: 'Cats',
        content: 'Milky',
        parentId: 0,
        createdAt: 0,
      }, {
        id: 4,
        title: 'RussianBlue',
        content: 'Glam',
        parentId: 3,
        createdAt: 0,
      },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handlePopup = this.handlePopup.bind(this);
  }


  handleClick(key) {
    this.setState({
      selectedKey: key,
    });
    this.handlePopup();
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

  handleEdit(title, content) {
    this.setState({
      mindData: update(this.state.mindData,
        {
          [this.state.selectedKey]: {
            title: { $set: title },
            content: { $set: content },
          },
        },
      ),
    });
  }

  handlePopup(key) {
    const mindButton = document.getElementsByClassName("button")[this.state.selectedKey];
    console.log(mindButton);
    const mindButtonCoord = mindButton.getBoundingClientRect();
    const popup = document.getElementsByClassName("popup")[0];
    const popupCoordsX = mindButtonCoord.left + window.scrollX;
    const popupCoordsY = mindButtonCoord.top + window.scrollY;

    if(!this.state.alreadyPopup) {
      mindButton.classList.add('clicked');
      popup.classList.add('visible');
    } else {
      mindButton.classList.remove('clicked');
      popup.classList.remove('visible');
    }
    // console.log(popup);

    popup.style.transform = `translate(${popupCoordsX}px, ${popupCoordsY}px)`;
    // console.log(document.getElementsByClassName("button")[this.state.selectedKey].getBoundingClientRect());
  }

  render() {
    const mapToComponents = (data) => {
      return data.map((mind, i) => {
        return (<MindInfo mind={mind} key={i} onClick={() => this.handleClick(i)} />);
      });
    };

    // console.log(this.state.mindData);
    // console.log(this.state.selectedKey);


    return (
      <div>
        <div><MindContent key={this.state.selectedKey} mind={this.state.mindData[this.state.selectedKey]}/></div>
        <div>{mapToComponents(this.state.mindData)}</div>
        <div>
          <MindDetail
            isSelected={this.state.selectedKey !== -1}
            mind={this.state.mindData[this.state.selectedKey]}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
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
