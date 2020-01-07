import React from 'react';
import SingleNews from './new.js';

export default function NewsBoard({news}){
    return(
        <div className="news-board">

            {
                news.map(
                    singleNews => <SingleNews singleNews={singleNews} key={singleNews.author} value={singleNews} />
                )
            }
            
        </div>
    )
};


