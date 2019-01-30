const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      surname: "Nowak",
      sex: "male"
    },
    {
      id: 2,
      age: 30,
      name: "Danka",
      surname: "Kowalska",
      sex: "female"
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      surname: "Wiśniewska",
      sex: "female"
    },
    {
      id: 4,
      age: 25,
      name: "John",
      surname: "Dee",
      sex: "male"
    }
  ]
};

const Item = props => (
  <div className="userInfo">
    <h3>
      User {props.user.name} {props.user.surname}
    </h3>
    <p>Age: {props.user.age}</p>
    <p>sex: {props.user.sex}</p>
  </div>
);

class ListItems extends React.Component {
  state = {
    select: "all"
  };

  handleUsersFilter(option) {
    this.setState({
      select: option
    });
  }

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        return users.map(user => <Item user={user} key={user.id} />);

      case "female":
        users = users.filter(user => user.sex === "female");
        return users.map(user => <Item user={user} key={user.id} />);
      case "male":
        users = users.filter(user => user.sex === "male");
        return users.map(user => <Item user={user} key={user.id} />);
      default:
        return "error";
    }
  };

  render() {
    return (
      <>
        <button onClick={this.handleUsersFilter.bind(this, "all")}>all</button>
        <button onClick={this.handleUsersFilter.bind(this, "female")}>
          female
        </button>
        <button onClick={this.handleUsersFilter.bind(this, "male")}>
          male
        </button>
        {this.usersList()}
      </>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
