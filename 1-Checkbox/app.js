const ValidationMessage = props => <p>{props.txt}</p>;

const OrderForm = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="checkbox"
        id="age"
        onChange={props.change}
        checked={props.isConfirmed}
      />
      <label htmlFor="age">I am at least 16 years old</label>
      <br /> <br />
      <button type="submit">Buy ticket</button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    // if false
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="You can watch movie" />;
      } else {
        return (
          <ValidationMessage txt="People under the age of 16 can't purchase tickets" />
        );
      }
    } else {
      return null;
    }
  };

  render() {
    const { isConfirmed } = this.state;

    return (
      <>
        <h1>Buy ticket for horror night</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
