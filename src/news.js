import React from 'react';
import SingleNews from './new.js';
import NewsModal from './previewModal.js';


export default function NewsBoard({news}){

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [selectedNews, selectNews] = React.useState([]);
  
    const handleClickOpen = scrollType => () => {
      setOpen(true);
      setScroll(scrollType);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    return(
        
        <div className="news-board">
            <NewsModal handleClose={handleClose} open={open} singleNews={selectedNews} />
            {news.map((singleNews,i)=>{
                return(
                    <div className={`news-item-${i}`}>
                        <SingleNews singleNews={singleNews} key={i} onClick={()=>{
                            handleClickOpen('paper')
                            selectNews(singleNews)
                        }} />
                    </div>
                )
                
            })}
        </div>
        
    )
};

