import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFriend } from '../actions/friendsActions';

class FriendForm extends Component {
  state = {
    id: 1,
    name: '',
    city: '',
    email: '',
    occupation: '',
    linkedIn: ''
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddFriend = _ => {
    const { name, email, occupation, linkedIn } = this.state;
    this.props.createFriend({ name, email, occupation, linkedIn });
    this.setState({ name: '', email: '', occupation: '', linkedin: '' });
  };

  render() {
    return (
      <form className="Column-Layout">
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.email}
          name="email"
          type="text"
          placeholder="Email"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.occupation}
          name="occupation"
          type="text"
          placeholder="Occupation"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.linkedIn}
          name="linkedIn"
          type="text"
          placeholder="LinkedIn URL"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddFriend()} type="button">
          Add New Friend
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingFriend: state.creatingFriend
  };
};

export default connect(mapStateToProps, { createFriend })(FriendForm);