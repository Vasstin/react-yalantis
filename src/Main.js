import React, { useEffect, useState } from "react";
import User from "./Components/User";
import Month from "./Components/Month";

const Main = props => {
  const [users, usersSetState] = useState([])
  const [monthId, monthIdSetState] = useState(null)

  useEffect(() => {
    const users = fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
    .then(response => response.json())
    .then(data => usersSetState(data))
  },[])

  let usersMap;
  if(monthId === null) {
    usersMap = users.map(item => {
      return (
        <User
          key = {item.id}
          id = {item.id} 
          firstName = {item.firstName} 
          lastName = {item.lastName}
          date = {item.dob}/>
      )
    })
  } else {
    let usersFiltered = users.filter(item =>  new Date(item.dob).getMonth() === monthId)
    usersMap = usersFiltered.map(item => {
      return (
        <User
          key = {item.id}
          id = {item.id} 
          firstName = {item.firstName} 
          lastName = {item.lastName}
          date = {item.dob}/>
      )
    })
  }
  
  
  function getMonthId(id) {
    return monthIdSetState(id)
  }

  function clearMonthId() {
    return monthIdSetState(null)
  }


  return(
    <div>
      <div>{usersMap}</div>
      <Month onGetMonthId = {getMonthId} onClearMonthId = {clearMonthId}/>
    </div>
  )
};

export default Main;
