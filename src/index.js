import React from 'react';
import ReactDOM from 'react-dom';


// 1/5 getDerivedStateFromProps()

class City extends React.Component {
  constructor(props){
    super(props);
    this.state = {capital: "Rome"};
  }
  static getDerivedStateFromProps(props, state){
    return{capital: props.cap};
  }
  changeCapital = () => {
    this.setState({capital: "Paris"});
  }
  render() {
    return(
      <div>
        <p>I live in {this.state.capital}.</p>
        <button onClick={this.changeCapital}>Press the button</button>
      </div>
    );
  }
}
ReactDOM.render(<City cap="Warsaw"/>, document.getElementById('root'));

// 2/5 shouldComponentUpdate()

class Place extends React.Component {
  constructor(props){
    super(props);
    this.state = {accommodation: "hostel"};
  }
  shouldComponentUpdate() {
    return true;
  }
  changePlace = () => {
    this.setState({accommodation: "hotel"});
  }
  render() {
    return(
      <div>
        <p>I am currently staying in {this.state.accommodation}.</p>
        <button onClick={this.changePlace}>Return True</button>
      </div>
    );
  }
}
ReactDOM.render(<Place />, document.getElementById('root1'));

// Analogously, let's do with returning false. But, we will change the class name

class Flat extends React.Component {
  constructor(props){
    super(props);
    this.state = {rooms: "3 rooms"};
  }
  shouldComponentUpdate() {
    return false;
  }
  changeNumber = () => {
    this.setState({rooms: "2 rooms"});
  }
  render() {
    return (
      <div>
        <p>I wish to buy flat with {this.state.rooms}.</p>
        <button onClick={this.changeNumber}>Return False.</button>
      </div>
    );
  }
}
ReactDOM.render(<Flat />, document.getElementById('root2'));

// 3/5 render()

class Car extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first: "Toyota",
      second: "Mercedes"
    };
  }
  changeCar = () => {
    this.setState({second: "Infiniti"});
  }
  render() {
    return (
      <div>
        <p>The car of my dream is {this.state.second}.</p>
        <button onClick={this.changeCar}>Change the car</button>
      </div>
    );
  }
}
ReactDOM.render(<Car />, document.getElementById('root3'));

// 4/5 getSnapshotBeforeUpdate() 

class Music extends React.Component {
  constructor(props){
    super(props);
    this.state = {genre: "Disco"};
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({genre: "Classic Rock"})
    }, 2000)
  }
  getSnapshotBeforeUpdate(initialProps, initialState) {
    document.getElementById('first').innerHTML = "The initial favourite music genre was " + initialState.genre;
  }
  componentDidUpdate() {
    document.getElementById('second').innerHTML = "Then, I chose another music genre, which is " + this.state.genre;
  }
  render() {
    return (
      <div>
        <h3>I prefer listening to {this.state.genre} music.</h3>
        <p id="first"></p>
        <p id="second"></p>
      </div>
    );
  }
}
ReactDOM.render(<Music />, document.getElementById('root4'));

// 5/5 componentDidUpdate() 

class Movie extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: "Rembo"};
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({title: "Rocky Balboa"});
    }, 2000)
  }
  componentDidUpdate() {
    document.getElementById('demo').innerHTML="The updated name of the movie is " + this.state.title;
  }
  render() {
    return(
      <div>
        <h3>The movie I want to watch is {this.state.title}.</h3>
        <p id="demo"></p>
      </div>
    );
  }
}
ReactDOM.render(<Movie />, document.getElementById('root5'));