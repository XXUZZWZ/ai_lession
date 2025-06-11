import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // 配置
  const {VITE_TOKEN,VITE_APP_ID,VITE_CLUSTER_ID} = import.meta.env
  console.log(VITE_TOKEN,VITE_APP_ID,VITE_CLUSTER_ID)
  const [prompt,setPrompt] = useState('航线规划');
  const [status,setStatus] = useState('ready')
  // 状态 ready waiting done 界面由数据状态驱动
  // 使用 useRef 来对象绑定，叫做hook 函数
  const audioRef = useRef(null);
  function createBlobURL(base64AudioData) {
    var byteArrays = []; 
    var byteCharacters = atob(base64AudioData); 
    for (var offset = 0; offset < byteCharacters.length; offset++) { 
      var byteArray = byteCharacters.charCodeAt(offset); 
      byteArrays.push(byteArray); 
    } 
    var blob = new Blob([new Uint8Array(byteArrays)], { type: 'audio/mp3' }); 
    return URL.createObjectURL(blob);
  }
  // 调用火山引擎
   // 去调用火山接口， 返回语音 
   const generateAudio = () => {
    const voiceName = "zh_female_wenroushunv_mars_bigtts"; // 角色
    const endpoint = "/tts/api/v1/tts" // api 地址

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer;${VITE_TOKEN}`
    }
    // post 请求体 
    const payload = {
      app: {
        appid: VITE_APP_ID,
        token: VITE_TOKEN,
        cluster: VITE_CLUSTER_ID
      },
      user: {
        uid: 'bearbobo'
      },
      audio: {
        voice_type: voiceName,
        encoding: 'ogg_opus', // 编码
        compression_rate:1, // 压缩的比例
        rate: 24000,
        speed_ratio: 1.0,
        volume_ratio: 1.0,
        pitch_ratio: 1.0,
        emotion: 'happy' // 情绪
      },
      request: {
        reqid: Math.random().toString(36).substring(7),
        text: prompt,
        text_type: 'plain',
        operation: 'query', 
        silence_duration: '125', 
        with_frontend: '1', 
        frontend_type: 'unitTson', 
        pure_english_opt: '1',
      }
    }

    fetch(
      endpoint,
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      }
    ).then(res => res.json())
    .then(data => {
     //  console.log(data, '/////////////////')
     const url = createBlobURL(data.data)// 返回一个可以播放声音的url
     audioRef.current.src = url;
     audioRef.current.play();
     setStatus('done')
    })

  }

  return (
   <div className="container" style={{
     maxWidth: '800px',
     margin: '0 auto',
     padding: '2rem',
     textAlign: 'center'
   }}>
    <div style={{
      marginBottom: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <label style={{
        fontSize: '1.2rem',
        fontWeight: '500',
        color: '#333'
      }}>Prompt</label>
      <textarea 
      className='input'
      style={{
        minHeight: '120px',
        padding: '1rem',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '1rem'
      }}
      value={prompt}
      onChange={(e)=>setPrompt(e.target.value)}
      />
      <button 
        onClick={generateAudio}
        style={{
          padding: '0.75rem 1.5rem',
          background: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => e.target.style.background = '#0061d5'}
        onMouseOut={(e) => e.target.style.background = '#0070f3'}
      >产生并播放</button>
    </div>
    <div className='out' style={{
      padding: '1.5rem',
      background: '#f8f9fa',
      borderRadius: '8px',
      fontSize: '1.1rem',
      color: '#555'
    }}>
      <div>{status}</div>
      <audio ref={audioRef}></audio>
    </div>
   </div>
  )
}

export default App
