import React from 'react';

export default function SingleNews({singleNews}){
    return(
        <div className="news-unit">
            <a href={singleNews.url}>{singleNews.title}</a>
            <b>{singleNews.publishedAt}</b>
        </div>
    )
};