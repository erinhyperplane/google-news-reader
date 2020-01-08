import React, { useEffect, useState } from 'react';
import './App.css';
import NewsBoard from './news.js';


function App() {
  const [news, setNews] = useState([]);

  async function fetchNews(){
    const res = await fetch(`${URL}`)

    const data = await res.json()
    //console.log(data);
    setNews(data.articles)
  }


  useEffect(()=>{
    fetchNews()
  },[])

  
  

  return (
    <div className="App">
      <p id="greeting">Today's news for you</p>
      <NewsBoard news={news} />
      
    </div>
  );
}

export default App;

const API_KEY = 'ad9145a4447247ff95a1bdbaa65d9cf3';
const BASE_URL = 'https://newsapi.org/v2/top-headlines?sources=google-news';
const URL = `${BASE_URL}&apiKey=${API_KEY}`;



/* const mockNewsBoard =  [
  {
      title: 'Iran\'s response to the US may happen slowly and that\'s more concerning',
      publishedAt: '2020.1.3',
      url: 'https://www.cnn.com/2020/01/06/middleeast/iran-us-response-walsh-analysis-intl/index.html'
  },
  {
      title: 'nothing else is new',
      publishedAt: '2020.1.3'
  },
]; */