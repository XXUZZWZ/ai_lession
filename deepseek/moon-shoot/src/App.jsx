import './App.css'
import { useState } from 'react'

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  // react 内置hook 钩子函数 快速的解决问题 响应式的更新
  // useRef 创建对象来绑定dom对象 
  const [content, setContent] = useState('');
  const [imgBase64Data, setImgBase64Data] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);

  const updateBase64Data = (e) => {
    // 拿到图片 e html5 js 和操作系统本地文件交互
    // base64 google 推出的编码方案
    const file = e.target.files[0];
    // console.log(file);
    if(!file) return;
    
    setFileName(file.name);
    
    // html5 读的对象
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // 异步操作
    reader.onload = () => {
     // console.log(reader.result);
      setImgBase64Data(reader.result);
      setIsValid(true)
    }
  }
  
  const update = async () => {
    if(!imgBase64Data) return;
    const endpoint = 'https://api.moonshot.cn/v1/chat/completions';
    const headers = {
      'Content-Type': 'application/json',
        // 授权码 Bearer 一般都会带
      'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
    };
    // 实时反馈
    setLoading(true);
    setContent('正在生成.....');
    
    try {
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
    } catch (error) {
      setContent(`处理请求时发生错误: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-primary text-white">
              <div className="d-flex align-items-center">
                <i className="bi bi-image-fill me-2 fs-4"></i>
                <h3 className="mb-0">moonshot AI 图像分析</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <label htmlFor="fileInput" className="form-label fw-bold">
                  <i className="bi bi-cloud-arrow-up me-2"></i>上传图片
                </label>
                <div className="input-group mb-3">
                  <input 
                    type="file" 
                    className="form-control" 
                    id="fileInput" 
                    accept='.jpeg,.jpg,.png,.gif'
                    onChange={updateBase64Data}
                  />
                  <label className="input-group-text" htmlFor="fileInput">
                    <i className="bi bi-folder me-1"></i>浏览
                  </label>
                </div>
                {fileName && (
                  <div className="alert alert-info d-flex align-items-center py-2" role="alert">
                    <i className="bi bi-file-earmark-image me-2"></i>
                    <div className="small">已选择: {fileName}</div>
                  </div>
                )}
              </div>
              
              <div className="d-grid gap-2">
                <button 
                  className="btn btn-primary btn-lg" 
                  onClick={update} 
                  disabled={!isValid || loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      处理中...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-magic me-2"></i>
                      分析图片
                    </>
                  )}
                </button>
              </div>
              
              {imgBase64Data && (
                <div className="mt-4">
                  <div className="card mb-4">
                    <div className="card-header bg-light">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-image me-2"></i>
                        <h5 className="mb-0">图片预览</h5>
                      </div>
                    </div>
                    <div className="card-body p-0 text-center bg-light">
                      <img 
                        src={imgBase64Data} 
                        alt="上传的图片预览" 
                        className="img-fluid"
                        style={{maxHeight: '400px'}}
                      />
                    </div>
                  </div>
                  
                  {content && (
                    <div className="card">
                      <div className="card-header bg-light d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-chat-square-text me-2"></i>
                          <h5 className="mb-0">分析结果</h5>
                        </div>
                        {loading && <div className="spinner-grow spinner-grow-sm text-primary" role="status"></div>}
                      </div>
                      <div className="card-body">
                        <div className={loading ? 'text-muted fst-italic' : ''}>
                          {content}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="card-footer text-center text-muted py-3">
              <small>Powered by moonshot AI & Bootstrap</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
