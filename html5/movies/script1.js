// dom 编程
// 返回的DOM 节点对象 
// 配置 不可更改项
// 电影接口
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const oForm = document.querySelector('#form');
const oInput = document.querySelector('#search');
console.log(oForm);
// 获取电影
const getMovies = (keyword)=>{
  const reqUrl = API_URL;
 if(keyword){
  // 搜索
  reqUrl = SEARCH_API + keyword;
 }else{
  const reqUrl = API_URL
 }
 fetch(reqUrl)
 .then(res => res.json())
 .then(date =>{
  //console.log(date)
  showMovies(data.results);
 })
}
// 负责  movies 的render
const  showMovies = (movies)=>{
 main.innerHTML =  movies.map((movie)=>{
  // es6 解构赋值
  // 右边{} 解给 左侧 {} es6 y优雅快捷
  const { poser_path,title,vote_average, overview } = movie;
  return `
   <div class="movie">
      <img src="${IMG_PATH + poser_path} " alt="${title}">
      <movie-info>
        <h3>${title}</h3>
        <span class="">${vote_average}</span>
      </movie-info>
    </div>
    <div class="overview">
      <h3>overview</h3>
      ${overview}
    </div>
  `
 }).join('')
}
window.onload = function(){
  getMovies();
}
oForm.addEventListener('submit', function (event) {
  // e 是一个事件对象
  console.log(event,'///////');
  console.log(event.target.value);
  event.preventDefault();
  const search = oInput.value.trim();
  console.log(search);
  if(search){
   console.log(search)
   alert(search)
   // 搜索电影
   // 调用接口 
   console.log('调用接口:')
   getMovies(search) 
  }else{
    alert('请输入 search');
  }
})
// 登陆要做的细节   