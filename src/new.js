import React from 'react';

export default function SingleNews({singleNews, handleClickOpen, selectNews, news}){
    
    const year = singleNews.publishedAt.substring(0,4);
    
    const monthNumber = Number(singleNews.publishedAt.substring(5,7));
    //console.log(monthNumber)
    const month = ["Jan","Feb","Mar","April","May","June","July","August","September","October","November","December"];
    const monthAbbr = month[monthNumber-1];
    //console.log(monthAbbr);

    const date = singleNews.publishedAt.substring(8,10);
    //console.log(date)

    const time = singleNews.publishedAt.substring(11,16);

    const newDateFormat = `${monthAbbr} ${date}, ${year} `;



    return(
        <div className="news-unit">
            <a href={singleNews.url} className="title">{singleNews.title}</a> 
            <button 
                className="button"
                onClick={()=> {
                    console.log("clicked")
                    handleClickOpen('paper')
                    console.log("handleclickopen executed")
                    selectNews(news)
                    console.log("news selected")
                }}

            >
            Preview
            </button>
            <p className="published-date"><b>{time} </b>{newDateFormat}</p>

        </div>
    )
};

