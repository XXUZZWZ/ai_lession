# 手写JavaScript Promise：深入理解异步编程的核心

> 本文将通过手写实现一个完整的Promise类，带您彻底理解JavaScript异步编程的核心机制。即使您是初学者，也能通过可视化演示和逐步讲解掌握Promise的精髓。

## 什么是Promise？

Promise是JavaScript中处理异步操作的对象，它代表一个尚未完成但预期将来会完成的操作。想象一下在快餐店点餐：收银员给您一个取餐号（Promise），食物还在准备中（pending状态），当食物准备好时您会收到通知（fulfilled状态），如果出现问题您也会被告知（rejected状态）。

## Promise的三种状态
1. **Pending（等待）** - 初始状态，操作尚未完成
2. **Fulfilled（已完成）** - 操作成功完成
3. **Rejected（已拒绝）** - 操作失败

## 手写Promise实现

```javascript
// 定义Promise的三种状态常量
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  // 私有属性：状态、结果和回调队列
  #state = PENDING;
  #result = undefined;
  #callbacks = [];
  
  constructor(executor) {
    // 定义resolve和reject函数
    const resolve = (value) => {
      // 确保状态只能从pending改变
      if (this.#state !== PENDING) return;
      this.#state = FULFILLED;
      this.#result = value;
      // 状态改变后执行所有回调
      this.#executeCallbacks();
    };
    
    const reject = (reason) => {
      if (this.#state !== PENDING) return;
      this.#state = REJECTED;
      this.#result = reason;
      this.#executeCallbacks();
    };
    
    try {
      // 执行传入的函数（可能包含异步操作）
      executor(resolve, reject);
    } catch (error) {
      // 捕获执行器中的错误
      reject(error);
    }
  }
  
  // 执行所有回调函数
  #executeCallbacks() {
    // 使用微任务确保异步执行
    queueMicrotask(() => {
      // 遍历执行所有回调
      while (this.#callbacks.length) {
        const [onFulfilled, onRejected, resolve, reject] = this.#callbacks.shift();
        
        try {
          if (this.#state === FULFILLED) {
            // 处理成功回调
            const result = onFulfilled ? onFulfilled(this.#result) : this.#result;
            resolve(result);
          } else if (this.#state === REJECTED) {
            // 处理失败回调
            const result = onRejected ? onRejected(this.#result) : this.#result;
            reject(result);
          }
        } catch (error) {
          // 捕获回调中的错误
          reject(error);
        }
      }
    });
  }
  
  // then方法：添加成功/失败回调
  then(onFulfilled, onRejected) {
    // 返回新Promise实现链式调用
    return new MyPromise((resolve, reject) => {
      // 将回调添加到队列
      this.#callbacks.push([onFulfilled, onRejected, resolve, reject]);
      
      // 如果状态已改变，立即执行回调
      if (this.#state !== PENDING) {
        this.#executeCallbacks();
      }
    });
  }
  
  // catch方法：添加错误处理回调
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  
  // 静态方法：创建已解决的Promise
  static resolve(value) {
    return new MyPromise(resolve => resolve(value));
  }
  
  // 静态方法：创建已拒绝的Promise
  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }
}
```

## 关键机制解析

### 1. 状态管理
Promise的核心是状态管理：状态只能从pending变为fulfilled或rejected，且**不可逆转**。

```javascript
const p = new MyPromise((resolve) => {
  resolve('成功'); // 状态变为fulfilled
  resolve('再次尝试'); // 被忽略，状态不可变
});
```

### 2. 异步执行
Promise使用微任务队列(`queueMicrotask`)确保回调在同步代码之后执行，这符合原生Promise的行为。

```javascript
console.log('开始');
new MyPromise(resolve => resolve('结果'))
  .then(result => console.log(result));
console.log('结束');

// 输出顺序: 开始 → 结束 → 结果
```

### 3. 链式调用
每个`then`方法都返回一个新的Promise，这是实现链式调用的关键：

```javascript
new MyPromise(resolve => resolve(2))
  .then(value => value * 2) // 返回4
  .then(value => value + 1) // 返回5
  .then(console.log); // 输出5
```

### 4. 值穿透
当`then`的参数不是函数时，结果会直接传递给下一个Promise：

```javascript
new MyPromise(resolve => resolve('穿透值'))
  .then(123) // 非函数，忽略
  .then(console.log); // 输出"穿透值"
```

## 完整实现与可视化演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>手写JavaScript Promise</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #1a2a6c);
            color: #fff;
            min-height: 100vh;
            padding: 40px 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        header {
            text-align: center;
            margin-bottom: 40px;
            padding: 20px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        h1 {
            font-size: 3.5rem;
            margin-bottom: 15px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
            background: linear-gradient(to right, #ff7e5f, #feb47b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .subtitle {
            font-size: 1.4rem;
            max-width: 800px;
            margin: 0 auto;
            color: #e0e0e0;
        }
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 40px;
        }
        @media (max-width: 900px) {
            .content {
                grid-template-columns: 1fr;
            }
        }
        .card {
            background: rgba(25, 25, 50, 0.8);
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
        }
        h2 {
            font-size: 2.2rem;
            margin-bottom: 25px;
            color: #ff7e5f;
            border-bottom: 2px solid #ff7e5f;
            padding-bottom: 10px;
        }
        h3 {
            font-size: 1.6rem;
            margin: 25px 0 15px;
            color: #feb47b;
        }
        .code-block {
            background: #1e1e2e;
            border-radius: 10px;
            padding: 25px;
            margin: 20px 0;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            font-size: 1.1rem;
            line-height: 1.6;
            box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
        }
        .comment {
            color: #57a64a;
        }
        .keyword {
            color: #569cd6;
        }
        .function {
            color: #dcdcaa;
        }
        .string {
            color: #ce9178;
        }
        .state-pending {
            background-color: #f39c12;
        }
        .state-fulfilled {
            background-color: #2ecc71;
        }
        .state-rejected {
            background-color: #e74c3c;
        }
        .state {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 4px;
            color: white;
            font-weight: bold;
            margin: 0 5px;
        }
        .visualization {
            margin-top: 30px;
            padding: 30px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 15px;
        }
        .promise-flow {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 30px 0;
            position: relative;
        }
        .step {
            text-align: center;
            padding: 20px;
            background: rgba(255, 126, 95, 0.2);
            border-radius: 10px;
            width: 180px;
            position: relative;
            z-index: 2;
        }
        .step-number {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 10px;
            color: #ff7e5f;
        }
        .arrow {
            position: absolute;
            top: 50%;
            width: 80px;
            height: 8px;
            background: #ff7e5f;
            transform: translateY(-50%);
        }
        .arrow::after {
            content: '';
            position: absolute;
            right: -10px;
            top: -6px;
            border: 10px solid transparent;
            border-left-color: #ff7e5f;
        }
        .arrow-1 { left: 180px; }
        .arrow-2 { left: 460px; }
        .arrow-3 { left: 740px; }
        .test-area {
            margin-top: 40px;
            padding: 30px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            text-align: center;
        }
        button {
            background: linear-gradient(to right, #ff7e5f, #feb47b);
            color: white;
            border: none;
            padding: 12px 30px;
            font-size: 1.2rem;
            border-radius: 50px;
            cursor: pointer;
            margin: 0 10px 20px;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }
        .output {
            margin-top: 30px;
            padding: 25px;
            background: rgba(30, 30, 46, 0.9);
            border-radius: 15px;
            min-height: 150px;
            font-family: 'Courier New', monospace;
            font-size: 1.2rem;
            text-align: left;
            white-space: pre-wrap;
        }
        .promise-box {
            display: flex;
            justify-content: space-around;
            margin: 30px 0;
        }
        .promise {
            background: rgba(40, 40, 60, 0.7);
            border-radius: 10px;
            padding: 20px;
            width: 200px;
            text-align: center;
        }
        .promise-id {
            font-weight: bold;
            margin-bottom: 10px;
            color: #ff7e5f;
        }
        .promise-state {
            padding: 5px 10px;
            border-radius: 20px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .promise-result {
            font-size: 0.9rem;
        }
        footer {
            text-align: center;
            margin-top: 50px;
            padding: 20px;
            color: #aaa;
            font-size: 1.1rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>手写JavaScript Promise</h1>
            <p class="subtitle">深入理解异步编程的核心机制，掌握现代JavaScript开发基石</p>
        </header>
        
        <div class="content">
            <div class="card">
                <h2>Promise核心概念</h2>
                <p>Promise是现代JavaScript异步编程的基石，解决了传统回调函数嵌套过深（回调地狱）的问题。</p>
                
                <h3>三大状态：</h3>
                <ul>
                    <li><span class="state state-pending">Pending</span> - 初始状态，操作尚未完成</li>
                    <li><span class="state state-fulfilled">Fulfilled</span> - 操作成功完成</li>
                    <li><span class="state state-rejected">Rejected</span> - 操作失败</li>
                </ul>
                
                <h3>关键特性：</h3>
                <ul>
                    <li><strong>状态不可逆</strong>：一旦状态改变就不能再变</li>
                    <li><strong>链式调用</strong>：.then()方法返回新Promise</li>
                    <li><strong>值穿透</strong>：当.then()的参数不是函数时，结果会穿透到下一个Promise</li>
                    <li><strong>错误冒泡</strong>：错误会一直向后传递直到被捕获</li>
                </ul>
                
                <div class="code-block">
<span class="comment">// 基本使用示例</span>
<span class="keyword">const</span> promise = <span class="keyword">new</span> Promise((resolve, reject) => {
  <span class="function">setTimeout</span>(() => {
    <span class="function">resolve</span>(<span class="string">"操作成功!"</span>);
  }, 1000);
});

promise
  .<span class="function">then</span>(result => {
    console.<span class="function">log</span>(result); <span class="comment">// 1秒后输出"操作成功!"</span>
  })
  .<span class="function">catch</span>(error => {
    console.<span class="function">error</span>(error);
  });
                </div>
            </div>
            
            <div class="card">
                <h2>手写Promise实现</h2>
                <p>下面是一个简化但功能完整的Promise实现，包含核心功能：</p>
                
                <div class="code-block">
<span class="keyword">class</span> MyPromise {
  <span class="comment">// 三种状态常量</span>
  <span class="keyword">static</span> PENDING = <span class="string">'pending'</span>;
  <span class="keyword">static</span> FULFILLED = <span class="string">'fulfilled'</span>;
  <span class="keyword">static</span> REJECTED = <span class="string">'rejected'</span>;
  
  <span class="comment">// 私有属性</span>
  #state = MyPromise.PENDING;
  #result = <span class="keyword">undefined</span>;
  #callbacks = [];
  
  <span class="function">constructor</span>(executor) {
    <span class="comment">// 定义resolve和reject函数</span>
    <span class="keyword">const</span> resolve = (value) => {
      <span class="keyword">if</span> (<span class="keyword">this</span>.#state !== MyPromise.PENDING) <span class="keyword">return</span>;
      <span class="keyword">this</span>.#state = MyPromise.FULFILLED;
      <span class="keyword">this</span>.#result = value;
      <span class="keyword">this</span>.#executeCallbacks();
    };
    
    <span class="keyword">const</span> reject = (reason) => {
      <span class="keyword">if</span> (<span class="keyword">this</span>.#state !== MyPromise.PENDING) <span class="keyword">return</span>;
      <span class="keyword">this</span>.#state = MyPromise.REJECTED;
      <span class="keyword">this</span>.#result = reason;
      <span class="keyword">this</span>.#executeCallbacks();
    };
    
    <span class="keyword">try</span> {
      <span class="comment">// 执行传入的函数</span>
      <span class="function">executor</span>(resolve, reject);
    } <span class="keyword">catch</span> (error) {
      <span class="comment">// 捕获执行器中的错误</span>
      <span class="function">reject</span>(error);
    }
  }
  
  <span class="comment">// then方法实现（核心）</span>
  <span class="function">then</span>(onFulfilled, onRejected) {
    <span class="comment">// 返回新Promise实现链式调用</span>
    <span class="keyword">return</span> <span class="keyword">new</span> <span class="function">MyPromise</span>((resolve, reject) => {
      <span class="comment">// 将回调添加到队列</span>
      <span class="keyword">this</span>.#callbacks.<span class="function">push</span>([onFulfilled, onRejected, resolve, reject]);
      
      <span class="comment">// 如果状态已改变，立即执行回调</span>
      <span class="keyword">if</span> (<span class="keyword">this</span>.#state !== MyPromise.PENDING) {
        <span class="keyword">this</span>.#executeCallbacks();
      }
    });
  }
  
  <span class="comment">// 其他方法（省略详细实现）</span>
  <span class="function">catch</span>(onRejected) { ... }
  <span class="keyword">static</span> <span class="function">resolve</span>(value) { ... }
  <span class="keyword">static</span> <span class="function">reject</span>(reason) { ... }
  
  <span class="comment">// 执行回调函数（私有方法）</span>
  #executeCallbacks() {
    <span class="comment">// 使用微任务确保异步执行</span>
    <span class="function">queueMicrotask</span>(() => {
      <span class="comment">// 遍历执行所有回调</span>
      <span class="keyword">while</span> (<span class="keyword">this</span>.#callbacks.length) {
        <span class="keyword">const</span> [onFulfilled, onRejected, resolve, reject] = 
          <span class="keyword">this</span>.#callbacks.<span class="function">shift</span>();
        
        <span class="keyword">try</span> {
          <span class="keyword">if</span> (<span class="keyword">this</span>.#state === MyPromise.FULFILLED) {
            <span class="comment">// 处理值穿透</span>
            <span class="keyword">const</span> result = <span class="function">typeof</span> onFulfilled === <span class="string">'function'</span>
              ? <span class="function">onFulfilled</span>(<span class="keyword">this</span>.#result)
              : <span class="keyword">this</span>.#result;
            <span class="function">resolve</span>(result);
          } <span class="keyword">else</span> {
            <span class="keyword">const</span> result = <span class="function">typeof</span> onRejected === <span class="string">'function'</span>
              ? <span class="function">onRejected</span>(<span class="keyword">this</span>.#result)
              : <span class="keyword">this</span>.#result;
            <span class="function">reject</span>(result);
          }
        } <span class="keyword">catch</span> (error) {
          <span class="function">reject</span>(error);
        }
      }
    });
  }
}
                </div>
            </div>
        </div>
        
        <div class="visualization">
            <h2>Promise执行流程</h2>
            <div class="promise-flow">
                <div class="step">
                    <div class="step-number">1</div>
                    <div>创建Promise</div>
                    <div class="state state-pending">Pending</div>
                </div>
                <div class="arrow arrow-1"></div>
                
                <div class="step">
                    <div class="step-number">2</div>
                    <div>添加.then()</div>
                    <div>存储回调</div>
                </div>
                <div class="arrow arrow-2"></div>
                
                <div class="step">
                    <div class="step-number">3</div>
                    <div>resolve()调用</div>
                    <div>改变状态</div>
                </div>
                <div class="arrow arrow-3"></div>
                
                <div class="step">
                    <div class="step-number">4</div>
                    <div>执行回调</div>
                    <div>传递结果</div>
                </div>
            </div>
            
            <h3>链式调用示意图</h3>
            <div class="promise-box">
                <div class="promise">
                    <div class="promise-id">Promise 1</div>
                    <div class="promise-state state-pending">Pending</div>
                    <div class="promise-result">结果: 等待中</div>
                </div>
                
                <div style="align-self: center;">→ then →</div>
                
                <div class="promise">
                    <div class="promise-id">Promise 2</div>
                    <div class="promise-state state-pending">Pending</div>
                    <div class="promise-result">结果: 等待中</div>
                </div>
                
                <div style="align-self: center;">→ then →</div>
                
                <div class="promise">
                    <div class="promise-id">Promise 3</div>
                    <div class="promise-state state-pending">Pending</div>
                    <div class="promise-result">结果: 等待中</div>
                </div>
            </div>
        </div>
        
        <div class="test-area">
            <h2>Promise功能测试</h2>
            <div>
                <button onclick="testBasic()">基础功能测试</button>
                <button onclick="testChain()">链式调用测试</button>
                <button onclick="testError()">错误处理测试</button>
                <button onclick="testAsync()">异步操作测试</button>
            </div>
            
            <div class="output" id="output">// 测试输出将显示在这里</div>
        </div>
        
        <footer>
            <p>© 2023 手写JavaScript Promise | 深入理解异步编程的核心机制</p>
        </footer>
    </div>

    <script>
        // 完整的MyPromise实现
        class MyPromise {
            static PENDING = 'pending';
            static FULFILLED = 'fulfilled';
            static REJECTED = 'rejected';
            
            #state = MyPromise.PENDING;
            #result = undefined;
            #callbacks = [];
            
            constructor(executor) {
                const resolve = (value) => {
                    if (this.#state !== MyPromise.PENDING) return;
                    this.#state = MyPromise.FULFILLED;
                    this.#result = value;
                    this.#executeCallbacks();
                };
                
                const reject = (reason) => {
                    if (this.#state !== MyPromise.PENDING) return;
                    this.#state = MyPromise.REJECTED;
                    this.#result = reason;
                    this.#executeCallbacks();
                };
                
                try {
                    executor(resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }
            
            then(onFulfilled, onRejected) {
                return new MyPromise((resolve, reject) => {
                    this.#callbacks.push([onFulfilled, onRejected, resolve, reject]);
                    
                    if (this.#state !== MyPromise.PENDING) {
                        this.#executeCallbacks();
                    }
                });
            }
            
            catch(onRejected) {
                return this.then(null, onRejected);
            }
            
            static resolve(value) {
                return new MyPromise(resolve => resolve(value));
            }
            
            static reject(reason) {
                return new MyPromise((_, reject) => reject(reason));
            }
            
            #executeCallbacks() {
                queueMicrotask(() => {
                    while (this.#callbacks.length) {
                        const [onFulfilled, onRejected, resolve, reject] = this.#callbacks.shift();
                        
                        try {
                            if (this.#state === MyPromise.FULFILLED) {
                                const result = typeof onFulfilled === 'function'
                                    ? onFulfilled(this.#result)
                                    : this.#result;
                                resolve(result);
                            } else {
                                const result = typeof onRejected === 'function'
                                    ? onRejected(this.#result)
                                    : this.#result;
                                reject(result);
                            }
                        } catch (error) {
                            reject(error);
                        }
                    }
                });
            }
        }

        // DOM元素和输出处理
        const outputElement = document.getElementById('output');
        let outputText = '';
        
        function clearOutput() {
            outputText = '';
            outputElement.textContent = outputText;
        }
        
        function addOutput(text) {
            outputText += text + '\n';
            outputElement.textContent = outputText;
        }
        
        // 测试函数
        function testBasic() {
            clearOutput();
            addOutput('=== 基础功能测试开始 ===');
            
            new MyPromise((resolve) => {
                addOutput('Promise执行器被调用');
                resolve('成功结果');
            }).then(result => {
                addOutput(`.then接收到结果: ${result}`);
            });
            
            addOutput('=== 测试结束 ===');
        }
        
        function testChain() {
            clearOutput();
            addOutput('=== 链式调用测试开始 ===');
            
            new MyPromise(resolve => {
                addOutput('初始Promise解决');
                resolve(10);
            })
            .then(value => {
                addOutput(`第一步接收: ${value}`);
                return value * 2;
            })
            .then(value => {
                addOutput(`第二步接收: ${value}`);
                return value + 5;
            })
            .then(value => {
                addOutput(`第三步接收: ${value}`);
                addOutput('=== 链式调用测试结束 ===');
            });
        }
        
        function testError() {
            clearOutput();
            addOutput('=== 错误处理测试开始 ===');
            
            new MyPromise((_, reject) => {
                reject('错误发生!');
            })
            .then(() => {
                addOutput('这里不会执行');
            })
            .catch(error => {
                addOutput(`捕获到错误: ${error}`);
                addOutput('=== 错误处理测试结束 ===');
            });
        }
        
        function testAsync() {
            clearOutput();
            addOutput('=== 异步操作测试开始 ===');
            addOutput('启动异步操作...');
            
            new MyPromise(resolve => {
                setTimeout(() => {
                    addOutput('异步操作完成');
                    resolve('异步结果');
                }, 1500);
            })
            .then(result => {
                addOutput(`接收到异步结果: ${result}`);
                addOutput('=== 异步操作测试结束 ===');
            });
        }
        
        // 初始化页面
        window.onload = () => {
            addOutput('欢迎测试手写Promise实现\n请点击上方按钮进行测试...');
        };
    </script>
</body>
</html>
```

## 关键点总结

1. **状态管理**：Promise的状态（pending/fulfilled/rejected）是核心，状态一旦改变就不可逆转。

2. **回调队列**：`.then()`方法注册的回调函数存储在队列中，当Promise状态改变时按顺序执行。

3. **链式调用**：每个`.then()`都返回一个新的Promise，这是链式调用的基础。

4. **异步执行**：使用`queueMicrotask`确保回调在同步代码之后执行，符合原生Promise的行为。

5. **错误处理**：通过`.catch()`方法捕获错误，或通过`.then()`的第二个参数处理。

6. **值穿透**：当`.then()`的参数不是函数时，结果会直接传递给下一个Promise。

## 为什么需要手写Promise？

手写Promise实现有以下好处：
1. **深入理解异步编程机制**
2. **掌握JavaScript核心概念**
3. **面试常见考察点**
4. **提升代码设计能力**
5. **更好地使用async/await**

通过自己实现Promise，您将彻底理解JavaScript异步编程的核心原理，为掌握更高级的异步技术（如async/await）打下坚实基础。