import {
  useState,
  useEffect
} from 'react';
const Timer = () =>{
  const [time,setTime] = useState(0);
  console.log('组件函数运行')
  console.log('JSX编译前')
  useEffect(()=>{
    console.log('组件渲染完了');
   
    const iner =  setInterval(()=>{
      setTime(time=>time+1)
      console.log(`有个定时器 running`)
    },1000)
   
    return () =>{
      console.log('组件销毁了')
      clearInterval(iner)
      // 组件销毁时自动执行
    }
  },[])
  
  return(
    <div><h1>Timer</h1>
    现在已经运行了{time}秒
    </div>
    
  )
}


export default Timer;