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

  function getMonthColor(){
    let monthColor = {}

    for(let i = 0; i <= 11; i++) {
      let filtered = users.filter(item =>  new Date(item.dob).getMonth() === i)
        if(filtered.length >= 3 && filtered.length <= 6) {
          monthColor[i] = 'blue'
        } else if(filtered.length >= 7 && filtered.length <= 10) {
          monthColor[i] = 'green'
        }  else if(filtered.length >= 11) {
          monthColor[i] = 'red'
        } else {
          monthColor[i] = 'grey'
        }
    }
    return monthColor
  }

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
    monthIdSetState(id)
  }

  function clearMonthId() {
    monthIdSetState(null)
  }


  return(
    <div>
      <div>{usersMap}</div>
      <Month monthColor = {getMonthColor()} onGetMonthId = {getMonthId} onClearMonthId = {clearMonthId}/>
    </div>
  )
};

export default Main;
