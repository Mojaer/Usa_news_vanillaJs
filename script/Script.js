import { newsFetch } from "./Dataimport.js"


// elements

const bbcNews = document.getElementById('bbc')
const cnnNews = document.getElementById('cnn')
const newsIndia = document.getElementById('india')
const science = document.getElementById('science')
const entertainment = document.getElementById('entertainment')

newsFetch(bbcNews, 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5cbc2dfcf8014aaca799fab6d3ddbc2a')
newsFetch(cnnNews, 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=5cbc2dfcf8014aaca799fab6d3ddbc2a')
newsFetch(newsIndia, 'https://newsapi.org/v2/top-headlines?country=in&apiKey=5cbc2dfcf8014aaca799fab6d3ddbc2a')
newsFetch(science, 'https://newsapi.org/v2/top-headlines?category=science&apiKey=5cbc2dfcf8014aaca799fab6d3ddbc2a')
newsFetch(entertainment, 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=5cbc2dfcf8014aaca799fab6d3ddbc2a')

const elements = [bbcNews, cnnNews, newsIndia, science, entertainment]

const displayNews = () => {
    console.log(1)
}


