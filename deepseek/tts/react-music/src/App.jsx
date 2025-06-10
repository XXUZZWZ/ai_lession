import { useRef, useState } from 'react'
import './App.css'

function App() {
  // const [isPlaying,setIsPlaying] = useState(false)
  // 火山引擎tts 配置文件 
  const reqUrl = " https://openspeech.bytedance.com/api/v1/tts"
  const TOKEN = 'JLPBk7k4ugJt69rGwJgxEUmiChYGCKz_'
  const APP_ID = '8619245565';
  const audioPlayer = useRef(null);
  const CLUSTER_ID = 'volcano_tts';

  const playMusic = () =>{
    // console.log(audioPlayer,'////')
    console.log(audioPlayer,'++++')
    audioPlayer.current.play();
  }

  const [prompt, setPrompt] = useState('大家好，我是黄新天');

  const  generateAudio = ()=> { 
    const voiceName2 = 'zh_male_XiaoxinNeural_moon_bigtts';
    const voiceName = 'zh_female_sunwukong_moon_bigtts';
    const endpoint = "tts/api/v1/tts";
    const header = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
    };
    }
  
  // 代码可读性高于一切
  return (
    <div className="container">
      <div>
        <label>Prompt</label>
        <button onClick={generateAudio}>生成并播放</button>
        <textarea
        className='input'
        placeholder='请输入prompt'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
      </div>
     <audio ref = {audioPlayer} src="\sounds\tlj.mp3"></audio>
     <button onClick={playMusic}>播放</button>
    </div>
  )
}

export default App
