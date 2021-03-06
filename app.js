// TODO
// var Cucumbers = () => (
// <div>Cucumbers</div>
// );
// var Kale = () => (
//   <div>Kale</div>
// );
// var GroceryListItems = (props) => (
//   <ul>
//     {props.groceries.map((item) => (
//       <li>{item}</li>
//       )
//       )}
//   </ul>
// );
class GroceryListItem extends React.Component {
  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
      done: false
    };
  }
  // onMouseEnter() {
  //   this.setState({
  //     done: !this.state.done
  //   });
  // }
  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }
  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
      //if the state is done put a line through, if not don't
    };
    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.onListItemHover.bind(this)}>{this.props.groceries}</li>
      //this code (above) will have it only bold when actively hovering and turn off once the mouse leaves
      // <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.groceries}</li>
      //this code will keep it bold until it is hovered over again
    );
  }
}
var GroceryList = (props) => (
  <ul>
    {props.groceries.map(groceries =>
      <GroceryListItem groceries={groceries} />
    )}
  </ul>
);
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceries={['Cucumbers', 'Kale', 'Apples','Oranges','Bananas']}/>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
//slightly confused why the id is app. I think it's because we are within app.js but not sure

