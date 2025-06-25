<think>
好的，用户让我细说一下XMLHttpRequest的readyState状态，从0到4。我需要先回忆每个状态的具体含义和触发时机。

首先，用户之前已经提到了使用XHR对象进行AJAX请求的例子，所以他们可能已经对基本用法有了解。现在他们想深入了解readyState的不同状态，这可能是因为他们在处理请求时遇到了问题，或者需要更精确地控制请求流程。

我需要详细解释每个状态码：0（未初始化）、1（已打开）、2（已发送）、3（接收中）、4（完成）。要确保每个状态的描述准确，并且举例说明在哪个阶段会触发对应的回调。

同时，用户可能想知道如何利用这些状态来优化代码，比如在状态3时处理部分数据，或者在状态4时完成最终操作。需要注意区分每个状态之间的区别，特别是状态3和4的不同之处。

还要考虑是否需要补充示例代码，展示如何在不同状态下调用不同的处理函数。但根据用户之前的回复，他们可能希望简洁但全面的解释，所以需要平衡详细度和清晰度。

另外，用户可能对实际应用中的常见问题感兴趣，比如跨域限制或错误处理，是否需要在这些方面做进一步说明？不过当前问题集中在readyState的状态，应保持回答的针对性。

最后，确保语言简洁明了，避免技术术语过多，让用户容易理解。可能还需要提醒用户注意兼容性和现代替代方案，但主要焦点是解释各个状态。
</think>
`readyState` 是 `XMLHttpRequest` 对象的核心属性，用于表示请求的生命周期状态。其值从 `0` 到 `4`，每个值对应不同的请求阶段：

---

### **1. readyState = 0（UNSENT）**
- **状态描述**：对象已创建，但尚未调用 `open()` 方法初始化请求。
- **使用场景**：通常在此阶段进行请求前的配置（如设置超时、事件监听器）。
- **示例**：
  ```javascript
  const xhr = new XMLHttpRequest(); // readyState = 0
  console.log(xhr.readyState); // 输出 0
  ```

---

### **2. readyState = 1（OPENED）**
- **状态描述**：已调用 `open()` 方法，请求已初始化，但尚未发送。
- **关键行为**：此时可以设置请求头（如 `setRequestHeader`），但不能操作响应数据。
- **示例**：
  ```javascript
  xhr.open('GET', 'https://api.example.com/data', true); // readyState = 1
  console.log(xhr.readyState); // 输出 1
  ```

---

### **3. readyState = 2（HEADERS_RECEIVED）**
- **状态描述**：请求已发送，且服务器已返回响应头（HTTP 状态码等元信息），但响应体尚未接收。
- **可用属性**：可通过 `xhr.status` 获取 HTTP 状态码，`xhr.getAllResponseHeaders()` 获取响应头。
- **示例**：
  ```javascript
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 2) {
      console.log('响应头已接收:', xhr.getAllResponseHeaders());
    }
  };
  ```

---

### **4. readyState = 3（LOADING）**
- **状态描述**：服务器正在传输响应体（数据流），`responseText` 属性已包含部分数据。
- **特点**：适用于流式传输（如长连接），可实时处理部分数据。
- **示例**：
  ```javascript
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 3) {
      console.log('接收中:', xhr.responseText); // 可能输出不完整数据
    }
  };
  ```

---

### **5. readyState = 4（DONE）**
- **状态描述**：请求已完成，所有数据已接收（或发生错误）。
- **最终处理**：通常在此阶段解析完整响应数据（如 `JSON.parse(xhr.responseText)`）。
- **示例**：
  ```javascript
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('请求成功:', JSON.parse(xhr.responseText));
      } else {
        console.error('请求失败:', xhr.status);
      }
    }
  };
  ```

---

### **状态流转流程**
```
0（UNSENT） → 1（OPENED） → 2（HEADERS_RECEIVED） → 3（LOADING） → 4（DONE）
```

---

### **注意事项**
1. **异步请求（默认）**：只有 `async=true` 时，`readyState` 会逐步触发（0→1→2→3→4）；同步请求（`async=false`）会直接跳到 `4`。
2. **跨域限制**：在跨域请求中，部分响应头可能被浏览器屏蔽（需服务器配置 CORS）。
3. **错误处理**：即使 `readyState=4`，仍需检查 `status` 是否为 `200`，因为网络错误（如 404、500）也会触发此状态。

如果需要更现代的替代方案，建议使用 `fetch()` 或 `axios`，它们提供更简洁的 Promise API。