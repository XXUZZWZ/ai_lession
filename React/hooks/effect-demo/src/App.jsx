import{ 
  useState,
  useEffect
 } from 'react'
import './App.css'
import Timer from './components/Timer'
function App() {
  const [count,setCount] = useState(0);
  const [num,setNum] = useState(0);
  const [repos,setRepos] = useState([]);
  const [display,setDisplay] = useState(true);
 // 作用：正作用？ 渲染组件
 // 副作用 渲染完组件后搞点副作用
 // 生命周期函数 挂载后mounted
//  console.log('组件渲染开始')
//   useEffect(()=>{
//   console.log('组件渲染完成,调用useEffect()乌伊莱')
//   })
// 没有参数每渲染一次就执行一次
  // 生命周期的更新
  // 第二项是依赖项数组
  // const uu= 0;
  // useEffect(()=>{
  //   console.log(`
  //     count值改变,现在为${count}
  //     num值改变,现在为${num}`)
  // })
  
  // useEffect(()=>{
  //  console.log(`只运行一次！！！`)
  // },[])

  // 这个如果count不更新就不会执行（第一次也触发）
  
  // 组件的模板编译
  // 挂载到#root上根节点上
  //console.log('组件的模板编译')
  useEffect(()=>{
    // api 数据是动态的
    const fecthRepos = async ()=>{
      const res = await fetch('https://api.github.com/users/XXUZZWZ/repos')
      const data = await res.json()
      setRepos(data);
      console.log(data)
    }
    fecthRepos()
  },[])
  return (
    <>
     <h1>useEffect()</h1>
     <h2>{count}</h2>
     <button
     onClick={()=>{
      setCount(count=>count+1)
     }}>点我</button>
     <br />
     <h2>{num}</h2>
     <button
     onClick={()=>{
      setNum(num=>num+1)
     }}>点我</button>
     <ul id='repos'>
      {
        repos.map(repo=>{
          //循环输出要有唯一值
          return <li key={repo.id}>key={repo.id}  repo:{repo.name}   fill_name:{repo.full_name}</li>
        })
      }
     </ul>
     {display && <Timer/>}
     <button 
     onClick={()=>{
      setDisplay(!display)
     }}
     >
      display or no
     </button>
    </>
  )
}

export default App
