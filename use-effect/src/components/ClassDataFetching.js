import React, { Component } from "react";
import axios from "axios";

export default class ClassDataFetching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   console.log(response);
      this.setState({
        posts: response.data,
      });
      console.log(this.state.posts);
    });
  }

  render() {
    return <div>{this.state.posts.map((post) => <li>{post.title}</li>)}</div>;
  }
}
