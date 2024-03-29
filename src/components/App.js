import React, { PureComponent } from "react";

import ArticleList from "./ArticleList";
import articles from "../fixtures";

import "bootstrap/dist/css/bootstrap.css";

class App extends PureComponent {
  state = {
    reverted: false
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">
            Article List
            <button
              className="btn btn-success float-right"
              onClick={this.revert}
            >
              Revert
            </button>
          </h1>
        </div>
        <ArticleList
          articles={this.state.reverted ? articles.slice().reverse() : articles}
        />
      </div>
    );
  }
  revert = () => {
    this.setState({
      reverted: !this.state.reverted
    });
  };
}
export default App;
