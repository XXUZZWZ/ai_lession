import './App.css'
import PictureCard from './components/PictureCard/index.jsx'
function App() {
  

  return (
    // jsx react 优势 方便html模板
    // 自定义组件 App的子组件将html,css，js组合起来，模块化，可以复用，页面由dom树-->组件树
    <>
     <div className='container'>
      <PictureCard/>
     </div>
    </>
  )
}

export default App
