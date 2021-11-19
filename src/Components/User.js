import React from "react";
import './User.css'

const User = props => {
  return (
    <div className = 'user'>
      <div className = 'firstName'>{props.firstName}</div>
      <div>{props.lastName}</div>
    </div>
  )
};

export default User;
