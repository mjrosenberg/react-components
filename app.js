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
  onListItemClick() {
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
      textDecoration: this.state.done ? 'line-through' : 'none'
      //if the state is done put a line through, if not don't
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceries}</li>
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

