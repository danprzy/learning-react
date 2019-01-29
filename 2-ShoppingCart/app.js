class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0
  };

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    });
  };

  handleAddCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    });
  };

  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0
    });
  };

  render() {
    const { shoppingCart, availableProducts } = this.state;
    return (
      <div>
        <p>Add to basket</p>
        <button
          disabled={shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>

        <span style={shoppingCart === 0 ? { opacity: 0.3 } : {}}>
          {shoppingCart}
        </span>

        <button
          disabled={shoppingCart === availableProducts ? true : false}
          onClick={this.handleAddCart}
        >
          +
        </button>
        {shoppingCart > 0 ? (
          <button onClick={this.handleBuy}>Buy</button>
        ) : null}
        <p>Only {availableProducts} products left</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
