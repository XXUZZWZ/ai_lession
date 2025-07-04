## 请求格式 (HTTP Request Format)

一个完整的 HTTP 请求报文由以下四部分组成，严格按照顺序排列：

1.  **请求行 (Request Line):**

    - **格式：** `方法 请求目标 HTTP/版本`
    - **内容详解：**
      - **方法 (Method)：** 定义客户端希望对资源执行的操作。常见方法有：
        - `GET`： 请求获取指定的资源。通常不应包含请求体（即使包含，服务器也可能忽略）。
        - `POST`： 向指定资源提交数据（如表单数据、文件上传、API 调用）。通常包含请求体。
        - `PUT`： 替换指定资源的全部内容。
        - `DELETE`： 请求删除指定的资源。
        - `HEAD`： 与 `GET` 类似，但只请求响应头，不返回响应体。用于检查资源是否存在或获取元信息。
        - `PATCH`： 对资源进行部分修改。
        - `OPTIONS`： 请求服务器告知其支持的请求方法或其它选项（常用于 CORS 预检请求）。
      - **请求目标 (Request Target):** 通常是要访问的资源路径（如 `/index`, `/api/users`），有时也包含查询字符串（如 `/search?q=http`）。在代理请求中，它可能是完整的 URL。
      - **HTTP 版本 (HTTP Version)：** 声明客户端使用的 HTTP 协议版本（如 `HTTP/1.1`, `HTTP/2`）。这决定了服务器如何解析请求和构建响应。

2.  **请求头 (Request Headers):**

    - **格式：** `字段名: 字段值`
    - **作用：** 提供关于请求本身或客户端的附加信息。每个头字段占一行。
    - **常见请求头示例：**
      - `Host: www.example.com` **(必需，尤其在 HTTP/1.1)**： 指定请求的目标服务器域名和端口号。虚拟主机依赖此头区分不同网站。
      - `User-Agent: Mozilla/5.0 ...`： 标识发起请求的客户端软件（浏览器、爬虫等）。
      - `Accept: text/html,application/xhtml+xml`： 告知服务器客户端能够理解和优先接收的响应内容类型 (MIME types)。
      - `Accept-Language: en-US, en;q=0.9, zh-CN;q=0.8`： 告知服务器客户端优先选择的自然语言。
      - `Accept-Encoding: gzip, deflate, br`： 告知服务器客户端支持的响应内容压缩算法。
      - `Content-Type: application/json` **(POST/PUT/PATCH 等含请求体的方法必需)**： 声明请求体的媒体类型 (MIME type)。常见值：`application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`。
      - `Content-Length: 123` **(POST/PUT/PATCH 等含请求体的方法必需)**： 声明请求体的大小（以字节为单位）。
      - `Authorization: Basic dXNlcjpwYXNzd29yZA==` 或 `Bearer eyJhbGci...`： 提供用于访问受保护资源的凭证（如用户名密码、Token）。
      - `Cookie: sessionid=abc123; theme=dark`： 将之前服务器通过 `Set-Cookie` 响应头设置的 Cookie 发送回服务器。
      - `Connection: keep-alive` 或 `Connection: close`： 指示客户端对连接管理的偏好（持久连接或关闭）。
      - `Cache-Control: no-cache`： 指示服务器或中间缓存如何处理该请求的缓存。

3.  **空行 (Empty Line):**

    - **作用：** **至关重要**。这是一个只包含回车换行符 (`\r\n`) 的空行。它标志着请求头的结束。如果请求有正文，正文将紧随其后开始。没有这个空行，服务器无法区分头和体。

4.  **请求体 (Request Body):**
    - **作用：** 包含客户端发送给服务器的实际数据。**并非所有请求都有请求体（如 GET、HEAD、OPTIONS、DELETE 通常没有）。**
    - **内容：** 格式由 `Content-Type` 头指定。常见形式：
      - `application/x-www-form-urlencoded`： 表单数据，格式如 `key1=value1&key2=value2`。
      - `multipart/form-data`： 包含文件上传的表单数据，有边界分隔。
      - `application/json`： JSON 格式的结构化数据（如您的 POST 示例）。
      - `application/xml`： XML 格式的数据。
      - 纯文本、二进制数据等。
    - **大小：** 由 `Content-Length` 或 `Transfer-Encoding` 头（如 `chunked`）指定。

### 请求示例详解

- **GET 请求:**

  ```http
  GET /index HTTP/1.1     // 请求行：方法=GET, 目标=/index, 版本=HTTP/1.1
  Host: localhost:1234    // 请求头：目标主机是 localhost 的 1234 端口
                          // 空行 (这里看不见但存在)
                          // 无请求体 (GET 通常没有)
  ```

- **POST 请求:**
  ```http
  POST /api/users HTTP/1.1              // 请求行：方法=POST, 目标=/api/users, 版本=HTTP/1.1
  Host: localhost:1234                  // 请求头：目标主机
  Content-Type: application/json        // 请求头：请求体是 JSON 格式
  Content-Length: 18                    // 请求头：请求体长度是 18 字节
  Cookie: session=1234567890            // 请求头：发送 Cookie (注意：规范写法是 `Cookie`，不是 `set-cookie`，`set-cookie`是响应头)
                                        // 空行 (这里看不见但存在)
  { "username": "admin", "password": "password" } // 请求体：JSON 数据 (长度18字节)
  ```

---

## 响应格式 (HTTP Response Format)

一个完整的 HTTP 响应报文也由四部分组成，严格按照顺序排列：

1.  **状态行 (Status Line):**

    - **格式：** `HTTP/版本 状态码 状态描述`
    - **内容详解：**
      - **HTTP 版本 (HTTP Version)：** 声明服务器使用的 HTTP 协议版本（通常与请求的版本匹配或低于请求版本）。
      - **状态码 (Status Code)：** **三位数字**，表示请求处理的结果。第一位数字定义类别：
        - `1xx` (信息性)： 请求已接收，继续处理。
        - `2xx` (成功)： 请求已被成功接收、理解、接受。最常见的是 `200 OK`。
        - `3xx` (重定向)： 需要客户端采取进一步的操作来完成请求（如 `301 Moved Permanently`, `302 Found`, `304 Not Modified`）。
        - `4xx` (客户端错误)： 请求包含语法错误或无法完成（如 `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`）。
        - `5xx` (服务器错误)： 服务器在处理请求时发生错误（如 `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`）。
      - **状态描述 (Reason Phrase)：** 对状态码的简短文字说明（如 `OK`, `Not Found`, `Internal Server Error`）。这个描述对人类友好，但程序主要依赖状态码。

2.  **响应头 (Response Headers):**

    - **格式：** `字段名: 字段值`
    - **作用：** 提供关于响应的附加信息，如服务器信息、响应的内容、缓存指令、Cookie 设置等。每个头字段占一行。
    - **常见响应头示例 (结合您的淘宝响应)：**
      - `Server: Tengine`： 标识响应的服务器软件（Tengine 是淘宝基于 Nginx 开发的 Web 服务器）。
      - `Content-Type: text/html; charset=utf-8`： **必需**。声明响应体的媒体类型 (MIME type) 和字符编码。
      - `Content-Length: 1024`： 声明响应体的大小（字节）。如果使用 `Transfer-Encoding: chunked`（如示例），则不应使用 `Content-Length`。
      - `Transfer-Encoding: chunked`： 表示响应体使用分块传输编码（常用于动态生成内容，长度事先未知）。
      - `Connection: close`： 指示服务器在发送完响应后关闭连接。
      - `Cache-Control: max-age=0, s-maxage=112`： 指示客户端和中间缓存如何缓存此响应（`max-age` 给浏览器看，`s-maxage` 给共享缓存看）。
      - `Set-Cookie: sessionid=abc123; Path=/; Expires=...`： **重要**。服务器要求客户端设置一个或多个 Cookie。注意与请求头 `Cookie` 区分。
      - `Location: /new-page`： 配合 `3xx` 重定向状态码，指定客户端应重定向到的 URL。
      - `ETag: "13b41-PqysWfJOj/1AFZt4Pt6zXyNP0gU"`： 资源的特定版本标识符，用于缓存验证（配合 `If-None-Match` 请求头）。
      - `Last-Modified: Thu, 03 Jul 2025 17:30:00 GMT`： 资源最后修改时间，用于缓存验证（配合 `If-Modified-Since` 请求头）。
      - `Content-Encoding: gzip`： 声明响应体使用了 gzip 压缩（客户端需要解压）。
      - `Vary: Accept-Encoding`： 告诉缓存服务器，响应的内容会根据请求头 `Accept-Encoding` 的不同而变化。
      - `Strict-Transport-Security: max-age=31536000` (HSTS)： 强制客户端在未来一段时间内通过 HTTPS 访问该域名。
      - `X-XSS-Protection: 1; mode=block`： 启用并配置浏览器内置的 XSS 过滤器（历史遗留，现代浏览器主要依赖 `Content-Security-Policy`）。
      - `Date: Thu, 03 Jul 2025 17:34:49 GMT`： 响应报文生成的日期和时间。
      - `Via: cache35.l2et135-6[587,529,200-0,C], ...`： 显示请求经过的代理或网关服务器路径（用于诊断）。
      - `X-Cache: HIT TCP_MEM_HIT dirn:-2:-2`： (特定于 CDN/缓存服务器) 指示该响应是否从缓存中获取（`HIT`），以及缓存的类型和位置。

3.  **空行 (Empty Line):**

    - **作用：** 同样**至关重要**。这是一个只包含回车换行符 (`\r\n`) 的空行。它标志着响应头的结束。响应体将紧随其后开始。没有这个空行，客户端无法区分头和体。

4.  **响应体 (Response Body):**
    - **作用：** 包含服务器返回给客户端的实际数据。
    - **内容：** 格式由 `Content-Type` 头指定。常见形式：
      - `text/html; charset=utf-8`： HTML 网页（如您的示例）。
      - `application/json`： JSON 数据（常见于 API 响应）。
      - `application/xml`： XML 数据。
      - `image/png`, `image/jpeg`： 图片数据。
      - `text/css`, `application/javascript`： CSS 或 JavaScript 文件。
      - 纯文本、二进制文件等。
    - **大小：** 由 `Content-Length` 头指定，或者如果使用了 `Transfer-Encoding: chunked`，则通过分块格式确定结束。

### 响应示例详解 (淘宝响应)

```http
HTTP/1.1 200 OK                                  // 状态行：版本=HTTP/1.1, 状态码=200, 描述=OK
Server: Tengine                                  // 响应头：服务器是 Tengine
Content-Type: text/html; charset=utf-8           // 响应头：响应体是 UTF-8 编码的 HTML
Transfer-Encoding: chunked                       // 响应头：响应体使用分块编码 (长度未知)
Connection: close                                // 响应头：发送后关闭连接
Vary: Accept-Encoding, Accept-Encoding, ...      // 响应头：内容会根据多个头字段变化
Date: Thu, 03 Jul 2025 17:34:49 GMT              // 响应头：响应生成时间
x-server-id: 28c3d6b2523ca52cb704b8b5dcd...      // 响应头：(淘宝自定义) 服务器标识
... (省略了大量淘宝特定的和缓存相关的头信息) ...
Content-Encoding: gzip                           // 响应头：响应体被 gzip 压缩
                                                 // 空行 (这里看不见但存在)
<!DOCTYPE html><html lang="zh-CN">               // 响应体开始：压缩分块编码的 HTML 内容 (浏览器会解压)
......
</html>                                          // 响应体结束
```

**关键要点总结：**

1.  **严格顺序：** 请求/响应行 -> 头字段 -> 空行 -> 体。顺序不能错。
2.  **空行关键：** 空行是头和体之间的**唯一分隔符**，绝对不能省略。
3.  **头字段格式：** `Name: Value`，每行一个头。
4.  **方法 vs 状态码：** 请求行定义*操作* (方法)，状态行定义*结果* (状态码)。
5.  **Host 头：** HTTP/1.1 的请求**必须**包含 `Host` 头。
6.  **Content-Type & Content-Length：** 对于包含体的请求和大多数响应，这两个头通常**非常重要**。
7.  **Set-Cookie vs Cookie：** `Set-Cookie` 是**响应头**（服务器设置），`Cookie` 是**请求头**（客户端发送）。
8.  **压缩：** `Content-Encoding` 表示体被压缩（如 gzip），客户端需要解压。
9.  **分块传输：** `Transfer-Encoding: chunked` 用于动态内容或长度未知时，替代 `Content-Length`。
10. **缓存控制：** `Cache-Control`, `ETag`, `Last-Modified`, `Expires` 等头共同控制缓存行为。
11. **自定义头：** 应用程序可以定义自己的 `X-` 前缀（非强制）或其他名称的头字段（如淘宝示例中的众多 `x-*` 头）。
12. **调试工具：** 使用浏览器开发者工具的“网络”(Network) 面板或命令行工具如 `curl -v` 可以方便地查看原始 HTTP 请求和响应格式。
