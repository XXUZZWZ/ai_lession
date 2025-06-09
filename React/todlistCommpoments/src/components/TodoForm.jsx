import { useState } from "react";
function TodoForm (props){ 
  const onAdd = props.onAdd;
  const [text,setText] = useState('');
 const  handleSubmit = (e) =>{
 
  // 我们要阻止默认行为
  // 由js 来控制
    e.preventDefault();  // even api
    // console.log(text); 
    onAdd(text);
    // 打报告

  }
const handleChange =(e) =>{
  setText(e.target.value)

}
  return (
    <form action="http://www.baidu.com"onSubmit={handleSubmit} >
      <input type="text"
       placeholder="请输入待办"
        value={text}
        onChange={handleChange} />
      <button className="wz-btn" type="submit">添加</button>
    </form>
  )
}

export default TodoForm;