import React from 'react';
import './App.css';

function Navigation() {
  return <div className='container'>
    <ul>
      <li>SUN</li>
      <li>Mon</li>
      <li>Tue</li>
      <li>WED</li>
      <li>THU</li>
      <li>FRI</li>
      <li>SAT</li>
    </ul>
  </div>

}
function App() {
  return <div className='app'>
      <SideBar />
      <div className='wrapper'>

        <h1>Running Tasks</h1>
        <p> Task Calendar</p>
        <Navigation />
      </div>
      
    </div>
  


}
function SideBar() {
  return <div className='sidebar'>
    <ul>
      <a className="navbar-brand" href="#"></a>
      <li><a href="#samuel spencer">Samuel Spencer</a></li>
      <li><a href="#dashboard">Dashboard</a></li>
      <li><a className="active" href="#todo">To do</a></li>
      <li><a href="#setting">Setting</a></li>
    </ul>
    <Users />  
</div>
}
function Users() {
  return <div className= 'users'>
    <h1>Users</h1><h1>Followers</h1>
    <button>Search user</button>
    <ul>
      <li>Phillip Santos</li>
      <li>Jorge Morgan</li>
      <li>Nannie Townsend</li>
    </ul>
  </div>
  
}





export default App 