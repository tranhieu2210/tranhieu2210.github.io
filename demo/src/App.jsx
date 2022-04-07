import { useState } from 'react'

const data = [
  {
    id : 1,
    name : "Hieu Tran",
    avatar :"public/image/bertie.png",
    day : "1997-10-22"
  },
  {
    id : 2,
    name : "Hien Ho",
    avatar :"public/image/bertie.png",
    day : "1997-10-03"
  },

]


function Person(props) {
  return (
  <div className='info'>
    <div className='avatar'>
      <img src={props.avatar} alt={props.name} />
    </div>
    <div className='name'>
      <h3>{props.name}</h3>
      <h3>{props.day}</h3>
    </div>   
  </div>
  )
}

function PersonList(props)  {
  return (
    <div className='person-list'>
      {props.data.map((person) => <Person key ={person.id} {...person} />)}
      
    </div>
  )
  }


const Button = (props) => {
  return (
    <button>{props.label}</button>
  )
}




function App() {

  return (
    <div className="App">
      <PersonList data = {data} />
    </div>
  )
}

export default App
