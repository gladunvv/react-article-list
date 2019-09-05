import React, { PureComponent } from "react";

class Article extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { article, isOpen, onButtonClick } = this.props;
    const body = isOpen && (
      <section className="card-text">{article.text}</section>
    );
    return (
      <div className="card" style={{ marginBottom: "40px" }}>
        <div className="card-header">
          <h2>
            {article.title}
            <button
              className="btn btn-primary float-right"
              onClick={onButtonClick}
            >
              {isOpen ? "close" : "open"}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted font-italic">
            creation date: {new Date(article.date).toDateString()}
          </h6>
          <p className="text-justify">{body}</p>
        </div>
      </div>
    );
  }
}

export default Article;
