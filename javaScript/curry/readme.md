# 柯里化（Currying）的极简实现

下面是一个不使用任何高级方法的柯里化实现，只使用基础 JavaScript 特性：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>柯里化（Currying）极简实现</title>
    <style>
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f5f7ff;
        color: #333;
        line-height: 1.6;
      }
      .container {
        background: white;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        margin-top: 20px;
      }
      h1 {
        color: #2c3e50;
        text-align: center;
        border-bottom: 2px solid #3498db;
        padding-bottom: 15px;
      }
      h2 {
        color: #2980b9;
        margin-top: 25px;
      }
      .code-block {
        background: #2c3e50;
        color: #ecf0f1;
        padding: 15px;
        border-radius: 5px;
        font-family: "Consolas", monospace;
        overflow-x: auto;
        margin: 20px 0;
        line-height: 1.4;
      }
      .explanation {
        background: #e3f2fd;
        border-left: 4px solid #3498db;
        padding: 15px;
        margin: 20px 0;
        border-radius: 0 5px 5px 0;
      }
      .example {
        background: #e8f5e9;
        border-left: 4px solid #4caf50;
        padding: 15px;
        margin: 20px 0;
        border-radius: 0 5px 5px 0;
      }
      .step {
        display: flex;
        align-items: flex-start;
        margin-bottom: 15px;
        background: #f9f9f9;
        padding: 10px;
        border-radius: 5px;
      }
      .step-number {
        background: #3498db;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
        flex-shrink: 0;
      }
      .test-area {
        background: #fff8e1;
        padding: 20px;
        border-radius: 5px;
        margin-top: 20px;
      }
      button {
        background: #3498db;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-top: 10px;
        transition: background 0.3s;
      }
      button:hover {
        background: #2980b9;
      }
      .result {
        margin-top: 15px;
        padding: 10px;
        background: #e0f7fa;
        border-radius: 4px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>柯里化（Currying）极简实现</h1>

      <div class="explanation">
        <p>
          <strong>柯里化</strong
          >是一种将多参数函数转换为一系列单参数函数的技术。它让函数可以逐步接收参数，每次接收一个参数并返回一个新函数，直到所有参数都被收集完毕。
        </p>
      </div>

      <h2>基本实现代码</h2>
      <div class="code-block">
        function curry(fn) { // 存储已收集的参数 let collectedArgs = []; return
        function curried(nextArg) { // 将新参数添加到已收集参数列表中
        collectedArgs.push(nextArg); // 检查是否收集了足够的参数 if
        (collectedArgs.length === fn.length) { // 如果足够，执行原始函数 return
        fn(...collectedArgs); } else { // 如果不够，返回自身继续收集参数 return
        curried; } }; }
      </div>

      <div class="explanation">
        <p>
          这个实现使用了最基础的JavaScript特性：闭包、数组和函数。它通过闭包保存已收集的参数，每次调用时添加一个新参数，并在参数数量足够时执行原始函数。
        </p>
      </div>

      <h2>使用示例</h2>
      <div class="code-block">
        // 原始加法函数 function add(a, b, c) { return a + b + c; } //
        创建柯里化版本 const curriedAdd = curry(add); // 逐步调用 const result =
        curriedAdd(1)(2)(3); // 返回 6
      </div>

      <h2>执行过程详解</h2>
      <div class="step">
        <div class="step-number">1</div>
        <div>
          <p>
            <strong>创建柯里化函数：</strong>调用 <code>curry(add)</code> 时：
          </p>
          <ul>
            <li>创建一个空数组 <code>collectedArgs</code></li>
            <li>返回 <code>curried</code> 函数</li>
          </ul>
        </div>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <div>
          <p><strong>第一次调用：</strong><code>curriedAdd(1)</code></p>
          <ul>
            <li>
              将参数 <code>1</code> 添加到 <code>collectedArgs</code>（现在为
              <code>[1]</code>）
            </li>
            <li>参数数量（1）小于原始函数所需数量（3）</li>
            <li>返回 <code>curried</code> 函数本身</li>
          </ul>
        </div>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <div>
          <p><strong>第二次调用：</strong><code>curriedAdd(1)(2)</code></p>
          <ul>
            <li>
              将参数 <code>2</code> 添加到 <code>collectedArgs</code>（现在为
              <code>[1, 2]</code>）
            </li>
            <li>参数数量（2）小于原始函数所需数量（3）</li>
            <li>返回 <code>curried</code> 函数本身</li>
          </ul>
        </div>
      </div>

      <div class="step">
        <div class="step-number">4</div>
        <div>
          <p><strong>第三次调用：</strong><code>curriedAdd(1)(2)(3)</code></p>
          <ul>
            <li>
              将参数 <code>3</code> 添加到 <code>collectedArgs</code>（现在为
              <code>[1, 2, 3]</code>）
            </li>
            <li>参数数量（3）等于原始函数所需数量（3）</li>
            <li>执行原始函数：<code>add(1, 2, 3)</code></li>
            <li>返回结果 <code>6</code></li>
          </ul>
        </div>
      </div>

      <div class="test-area">
        <h2>实时测试</h2>
        <p>点击按钮测试柯里化函数：</p>
        <button id="testButton">测试柯里化加法函数</button>
        <div class="result" id="result"></div>
      </div>
    </div>

    <script>
      // 极简柯里化实现
      function curry(fn) {
        let collectedArgs = [];

        return function curried(nextArg) {
          collectedArgs.push(nextArg);

          if (collectedArgs.length === fn.length) {
            return fn(...collectedArgs);
          } else {
            return curried;
          }
        };
      }

      // 测试函数
      function add(a, b, c) {
        return a + b + c;
      }

      // 创建柯里化版本
      const curriedAdd = curry(add);

      // 测试按钮事件
      document
        .getElementById("testButton")
        .addEventListener("click", function () {
          try {
            const result = curriedAdd(1)(2)(3);
            document.getElementById(
              "result"
            ).innerHTML = `<strong>结果：</strong> ${result}<br>
                     <strong>执行过程：</strong> curriedAdd(1)(2)(3) = 1 + 2 + 3 = 6`;
          } catch (e) {
            document.getElementById(
              "result"
            ).innerHTML = `<strong>错误：</strong> ${e.message}`;
          }
        });
    </script>
  </body>
</html>
```

## 实现特点

1. **极简实现**：只使用了闭包、数组和函数调用等基础 JavaScript 特性
2. **逐步收集参数**：每次调用只接收一个参数并添加到参数列表
3. **闭包存储**：使用闭包保存已收集的参数
4. **参数数量检查**：当收集的参数数量等于原函数参数数量时执行
5. **链式调用**：每次返回函数本身直到参数收集完成

这个实现展示了柯里化的核心概念：将多参数函数转换为一系列单参数函数调用，通过闭包保存中间状态，直到所有参数都被收集完毕。
