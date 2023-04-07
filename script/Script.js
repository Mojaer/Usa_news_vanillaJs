import { newsFetch } from "./Dataimport.js"


// elements

const bbcNews = document.getElementById('bbc')
const cnnNews = document.getElementById('cnn')
const newsIndia = document.getElementById('india')
const science = document.getElementById('Sports')
const entertainment = document.getElementById('entertainment')

newsFetch(bbcNews, 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dbfd44904b4a44e49d85782fe35b2512')
newsFetch(cnnNews, 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=dbfd44904b4a44e49d85782fe35b2512')
newsFetch(newsIndia, 'https://newsapi.org/v2/top-headlines?country=in&apiKey=dbfd44904b4a44e49d85782fe35b2512')
newsFetch(science, 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=dbfd44904b4a44e49d85782fe35b2512')
newsFetch(entertainment, 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=dbfd44904b4a44e49d85782fe35b2512')





