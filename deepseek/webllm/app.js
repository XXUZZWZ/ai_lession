// // 项目入口文件
// console.log('WebLLM项目已启动');

// // 后续可在此添加功能模块
// // 主动去请求api 
// // web 1.0 时代 html /css /js 时代 服务器端返回的html 页面 js只做交互
// // web 2.0时代 js主动请求后端服务器 ,动态页面,标准产品 微博

// // fetch('https://api.github.com/users/XXUZZWZ').then(res => res.json()).then(
// //   data => {
// //     console.log(data);
// //     document.querySelector('#reply').innerHTML = data.map(item => `
// //         <div>
// //           <h3>${item.name}</h3>
// //           <p>${item.bio}</p>
// //         </div>
// //       `).join('')
// //   }
// // );
// fetch('https://api.github.com/users/XXUZZWZ/repos')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     document.querySelector('#reply').innerHTML += data.map(repo =>`
//     <ul>
//       <li>${repo.name}</li>
//     </ul> 
//     `).join('')
//   })

// chat 方式 AIGC 生成 / 返回 的内容
// 由openai 制定的  


// 请求行
// 取一个有意义的名字
// webLLM web 底层是http协议
// api.deepseek.com是  二级域名 LLM服务以api方式提供  
// https 加密的http 更安全
// chat 聊天方式进行要求 messages  
const deekseek_url = "https://api.deepseek.com/chat/completions";
// 请求头
const header = {
  // 内容类型 
  'Content-Type':'application/json',
  // 你的API key 
  Authorization:'Bearer sk-d3470aa5e908400f98dbf60a378f70cb'
  
}
// 设置请求体
const payload = {
  model : 'deepseek-chat',
  messages:[
    // chat  三种角色 
    // 1. system 系统角色 只会出现一次  设置系统的角色，开始会话时
    // 2. user 用户角色  
    // 3. assistant 助手角色
    {
      role:'system',
      content:'You are a helpful assistant .'
    },
    {
      role:'user',
      content:'你好,deepseek'
    }
  ]
}
// 发送请求 
// 修复后的代码
fetch(deekseek_url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    ...header
  },
  body: JSON.stringify(payload)
  // 请求+LLM 生成要时间 
  // http是基于请求响应的协议
  // 返回的也是一个文本或二进制流
})
.then(res => res.json())// 解析也要花时间
.then(data => {
  console.log(data);
  if(data.choices?.[0]?.message?.content) {
    document.querySelector('#reply').innerHTML = data.choices[0].message.content;
  }
})
.catch(error => {
  console.error('请求失败:', error);
  document.querySelector('#reply').innerHTML = '请求失败，请检查控制台日志';
});

console.log( JSON.stringify(payload));
// 网络协议只能放字符串，二进制流， 所以要把对象转成字符串。 


/*
{
    "id": "640da495-3be1-43b2-82f5-f787835de696",
    "object": "chat.completion",
    "created": 1749126978,
    "model": "deepseek-chat",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "你好！😊我是DeepSeek Chat，很高兴见到你！有什么可以帮你的吗？无论是问题解答、学习辅导，还是闲聊，我都会尽力帮你！✨"
            },
            "logprobs": null,
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "prompt_tokens": 13,
        "completion_tokens": 35,
        "total_tokens": 48,
        "prompt_tokens_details": {
            "cached_tokens": 0
        },
        "prompt_cache_hit_tokens": 0,
        "prompt_cache_miss_tokens": 13
    },
    "system_fingerprint": "fp_8802369eaa_prod0425fp8"
}
 */