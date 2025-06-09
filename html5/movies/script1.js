
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const getMovies = (keyword)=>{
  let  reqUrl = "";
 if(keyword){
  // 搜索
  reqUrl = SEARCH_API + keyword;
 }else{
   reqUrl = API_URL
 }
 fetch(reqUrl)
 .then(res => res.json())
 .then(data =>{
  showMovies(data.results);
 })
}
// 负责  movies 的render
const  showMovies = (movies)=>{
  const main = document.getElementById('main');
 main.innerHTML = "";
 main.innerHTML =  movies.map((movie)=>{
  // es6 解构赋值
  // 右边{} 解给 左侧 {} es6 优雅快捷
  const { poster_path,title,vote_average, overview } = movie;
  return `
   <div class="movie">
      <img src="${IMG_PATH+poster_path}" alt="${title}">
      <div class = "movie-info">
        <h3>${title}</h3>
        <span class="rating">${vote_average}</span>
      </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
      </div>
    </div>
  `
 }).join('')
}
window.onload = function(){
  getMovies();
}
