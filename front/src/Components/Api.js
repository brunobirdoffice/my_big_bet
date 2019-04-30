import React from "react";

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      url: "http://localhost:3000/"
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(`${this.state.url}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          this.getUrl();
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  getUrl = () => {
    console.table(this.state);
  };

  render() {
    console.table(this.state.items);
    return (
      <div>
        <p>You are currently using : {this.state.url}</p>
      </div>
    );
  }
}

export default Api;
