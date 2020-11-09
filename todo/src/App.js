import React from 'react';
import './App.css';
import logo from './assets/logo.png'


function Navigation({name:_name})  {
  
    return (<ul>
      <a className="navbar-brand" href="/#"><img src={logo} alt='logo..' height='150px' /> </a>
      <li><a className="active" href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
    <li><a href="#about">{
       _name
    }</a></li>
    </ul>);
  
}
class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null
    }
  }
  handleinp(target) {
    this.setState({
      name: target.value
    })
  }
  render() {
    return (<> <Navigation name={this.state.name} /> <div id="paragraph">
      <h1>{this.state.name}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris ligula, semper varius orci quis, lacinia
      ornare ante. Nulla a viverra mi, vel auctor nisl. Suspendisse commodo dui eu odio aliquam, ut fermentum ante
      bibendum. Pellentesque maximus vitae dui vel maximus. Quisque nulla tellus, imperdiet vel luctus vel, tristique
      non ex. Nam non neque ut felis tincidunt rhoncus molestie sit amet lacus. Etiam dui ipsum, sollicitudin non
      massa quis, cursus convallis massa. Aenean euismod metus a lacinia convallis. Nulla nec libero at purus blandit
      volutpat id a ante. Sed id erat lorem. Nunc eleifend eleifend lectus ut posuere. Suspendisse sit amet efficitur
  mauris. Praesent non aliquam neque. Nulla nec erat imperdiet, pretium ligula at, iaculis justo.</p>
      <div className="button">
        <input id='text' onKeyUp={
          () => {
            this.handleinp(document.getElementById('text'))
          }
        } />
        <button type="button" onClick={
          () => {
            this.setState({
              name: 'Ryan and Kelsey'
            })
          }
        } className="btn btn-danger btn-rounded btn-lg ">More</button>
      </div>

    </div></>)
  }
}

function App() {
  return (
    < div className='body'>
      <div className='container'>
       
        <Body />

      </div>
    </div>
  )
}






export default App