import './App.css'
import { useState } from 'react'
function App() {
  console.log(import.meta.env.VITE_API_KEY);
  // react 内置hook 钩子函数 快速的解决问题 响应式的更新
  // useRef 创建对象来绑定dom对象 
  const [content,setContent] = useState('');
  const [imgBase64Data,setImgBase64Data] = useState('');
  const [isValid,setIsValid] = useState(false);

  const updateBase64Data = (e)=>{
    // 拿到图片 e html5 js 和操作系统本地文件交互
    // base64 google 推出的编码方案
    const file = e.target.files[0];
    // console.log(file);
    if(!file) return ;
    // html5 读的对象
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // 异步操作
    reader.onload = ()=>{
     // console.log(reader.result);
      setImgBase64Data(reader.result);
      setIsValid(true)
    }

    e.target.nextElementSibling.value = file ? window.URL.createObjectURL(file) : '';
  }
  const update = async ()=>{
    if(!imgBase64Data) return;
    const endpoint = 'https://api.moonshot.cn/v1/chat/completions';
    const headers = {
      'Content-Type': 'application/json',
        // 授权码 Bearer 一般都会带
      'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
    };
    // 实时反馈
    setContent('正在生成.....');
    const response = await fetch(
      endpoint,
      {
        method:'POST',
        headers,
        body:JSON.stringify({
          model:'moonshot-v1-8k-vision-preview',
          messages:[
            {
              role:'user',
              content:[
                {
                type:'image_url',
                image_url:{
                  url:imgBase64Data
                }
              },
              {
                type:'text',
                text:"请描述图片内容"
              }
            ]
            }
          ]
        })
      }
    )
    // 二进制流返回，json化也是异步任务
    const data = await response.json()
    
    setContent(data.choices[0].message.content)

    }



  return (
    <>
    <div className="container">
      <div>
        <label htmlFor="fileInput">文件</label>
        <input
         type="file"
          id="fileInput" 
          className = "input"
          accept='.jpeg,.jpg,.png,.gif'
          onChange = {updateBase64Data}
        />
        <button onClick={update} disabled = {!isValid} >提交</button>
        <div className="output">
          <div className="preview">
            {
              imgBase64Data && <img src={imgBase64Data} alt=""/>
            }
          </div>
        </div>
        <div>
          {content}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
