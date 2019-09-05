import React, {PureComponent} from "react";
import Article from "./Article";

export default class ArticleList extends PureComponent {
  render() {
    const articleElements = this.props.articles.map((article, index) => (
      <li style={{ listStyle: "none" }} key={article.id}>
        <Article article={article} defaultOpen={index === 0} />
      </li>
    ));
    return <ul>{articleElements}</ul>;
  }
}
