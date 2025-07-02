import React,{useState} from 'react';
import './style.css';

const PictureCard = () => {
  const [imgPreview, setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png');
  const [word,setWord] = useState('');
  const updateImageData = (e) => {
    // html5的图片上传
    // const file = e.target.files[0];
    const file = e.target.files?.[0];
    // 代替下面这种写法
    // const file = e.target.files?e.target.files[0]:null;
    // ?. 可选链操作符：当 files 为 null 或 undefined 时避免报错，直接返回 undefined 亮点
    if(!file) return ;
    console.log(file);
    // 图片预览 
    // I/O操作 异步的
    return new Promise((resolve,reject)=>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) =>{
        // console.log(e.target.result);
        // 响应式业务
        setImgPreview(e.target.result);

      }
    })
  }
  
  return (
    <div className='card'>
      <input 
      type="file" 
      id="selectImage"
      accept='.jpg,.jpeg,.png,.gif'
      onChange={updateImageData}
      />
      <label
       htmlFor="selectImage">
      <img src={imgPreview} alt="imgPreview" className='upload' />
      </label>
      {/* template -> jsx -> {数据绑定} -->响应式-->单词业务 */}
      <div className="word">{word}</div>
    </div>
  );
}

export default PictureCard;