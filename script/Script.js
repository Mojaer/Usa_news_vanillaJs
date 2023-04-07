import { newsFetch } from "./Dataimport.js"


// elements

const bbcNews = document.getElementById('bbc')
const cnnNews = document.getElementById('cnn')
const newsIndia = document.getElementById('india')
const science = document.getElementById('science')
const entertainment = document.getElementById('entertainment')

newsFetch(bbcNews, 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=16ac79f700cb490795f8dfa57c168d9c')
newsFetch(cnnNews, 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=16ac79f700cb490795f8dfa57c168d9c')
newsFetch(newsIndia, 'https://newsapi.org/v2/top-headlines?country=in&apiKey=16ac79f700cb490795f8dfa57c168d9c')
newsFetch(science, 'https://newsapi.org/v2/top-headlines?category=science&apiKey=16ac79f700cb490795f8dfa57c168d9c')
newsFetch(entertainment, 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=16ac79f700cb490795f8dfa57c168d9c')





