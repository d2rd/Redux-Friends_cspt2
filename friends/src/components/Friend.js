import React from 'react'
import { Link } 'react-router-dom';
import { connect } from 'react-redux'
import {deleteFriend } from '../actions/friendsActions'

const Friend = props => {
  const { friend, deleteFriend } = props

  const clickHandler = () => {
    deleteFriend(friend.id)
  }

  return (
    <div key={friend.id} className="friend-card">
      <p className="close-button" onClick={clickHandler}>X</p>
      <h2>{friend.name}</h2>
      <p>{friend.city}</p>
      <p>{friend.email}</p>
      <p>{friend.occupation}</p>
      <p>{friend.linkedInHandle}</p>
      <Link to={`/update/$friend.id`}>Update</Link>
      {/* <Link to={`http://linkedIn.com/in/{linkedInHandle}>{`linkedInHandle`}</Link>  */} // future link to LinkedIn profile
      
    </div>
  )
}