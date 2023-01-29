import React from 'react'

function NewsCard({news}) {
    const {title, description, url, urlToImage, source : {name}} = news;
  return (
    <div className="news__card">
        <img src={urlToImage} alt={title} className="news__card-img" />
        <div className="news__card-texts">
            <p className="news__card-author">{name}</p>
            <h3 className="news__card-title">{title}</h3>
            <p className="news__card-description">{description}</p>
        </div>
        <a href={url} className="news__card-link" target="_blank">Read News</a>
    </div>
  )
}

export default NewsCard