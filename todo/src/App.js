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
function SidebarItems({ title: _t, image: _i, icon: _ic, subtitle: _sub }) {
  return <div className='card'>
    <div className='avator'></div>

<div> <p className='title'>{_t} </p>
      <p className='subtitle'>{_sub}</p></div>

  </div>
}
function SideBar() {
  return <div className='sidebar'>
    <SidebarItems title='Samuel Spencer' subtitle='Creative Director' />
    <SidebarItems title='Dashboard' />
    <SidebarItems title='To do'/> 
    <SidebarItems title='Setting'  icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style></style></defs><g transform="translate(1 1)"><g class="a"><path class="b" d="M3,0A3,3,0,1,1,0,3,3,3,0,0,1,3,0Z" transform="translate(8 8)"/>
      <path class="b" d="M18.4,14a1.65,1.65,0,0,0,.33,1.82l.06.06a2,2,0,1,1-2.83,2.83l-.06-.06a1.663,1.663,0,0,0-2.82,1.18V20a2,2,0,1,1-4,0v-.09A1.65,1.65,0,0,0,8,18.4a1.65,1.65,0,0,0-1.82.33l-.06.06a2,2,0,1,1-2.83-2.83l.06-.06a1.663,1.663,0,0,0-1.18-2.82H2a2,2,0,1,1,0-4h.09A1.65,1.65,0,0,0,3.6,8a1.65,1.65,0,0,0-.33-1.82l-.06-.06A2,2,0,1,1,6.04,3.29l.06.06a1.65,1.65,0,0,0,1.82.33H8A1.65,1.65,0,0,0,9,2.17V2a2,2,0,0,1,4,0v.09a1.663,1.663,0,0,0,2.82,1.18l.06-.06a2,2,0,1,1,2.83,2.83l-.06.06a1.65,1.65,0,0,0-.33,1.82V8a1.65,1.65,0,0,0,1.51,1H20a2,2,0,0,1,0,4h-.09A1.65,1.65,0,0,0,18.4,14Z"/></g></g></svg>
    }/>
    {/* <ul>
      <a className="" href="#"></a>
      <li><a href="#samuel spencer">Samuel Spencer</a></li>
      <li><a href="#dashboard">Dashboard</a></li>
      <li><a className="active" href="#todo">To do</a></li>
      <li><a href="#setting">Setting</a></li>
    </ul> */}
    {/* <Users />   */}
  </div>
}
function Users() {
  return <div className='users'>
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