import React, { Component } from "react";

class Article extends Component {
  state = {
    isOpen: true
  };

  render() {
    const { article } = this.props;
    const body = this.state.isOpen && <section className="card-text">{article.text}</section>;
    return (
      <div className="card">
        <div className="card-header">
          <h2>
            {article.title}
            <button className="btn btn-primary float-right" onClick={this.handleClick}>
              {this.state.isOpen ? "close" : "open"}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted">creation date: {new Date(article.date).toDateString()}</h6>
          {body}
        </div>
      </div>
    );
  }
  handleClick = () => {
    console.log("---", "clicked");
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}

export default Article;
