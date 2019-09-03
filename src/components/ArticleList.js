import React from 'react'
import Article from './Article'

export default function ArticleList ({ articles }) {
    const articleElements = articles.map(article => 
        <li style={{listStyle: "none"}} key = {article.id}><Article article = { article }/></li>)
    return (
      <ul>
          {articleElements}
      </ul>
    );
}