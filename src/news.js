import React from 'react';
import SingleNews from './new.js';

export default function NewsBoard({news}){

    return(
        <div className="news-board">

            {
                news.map(
                    (singleNews, i) => {

                        return (
                            <div className={`news-item-${i}`}>
                            <SingleNews 
                                singleNews={singleNews} 
                                key={singleNews.author} 
                                value={singleNews} 
                            />
                            </div>
                        )
                    }
                    
                )
            }
            
        </div>
        
    )
};


